import { Object3D, Geometry, Mesh, CylinderGeometry } from 'three';

import Cube from '../../modules/Cube';
import Fan from '../fan';
import Fence from '../fence';
import Pine from '../pine';
import Windvane from './Windvane';
import Ladder from './Ladder';
import Stones from '../stones';

import PipeCorner from '../pipeCorner';
import PipeConnection from '../pipeConnection';

import { colors } from '../../modules/colors';
import { materials } from '../../modules/materials';


export default class MiddleIsland {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'middle-island';


		// big cube
		this.mesh.add(
			(new Cube(
				[400, 400, 400],
				{x: 0, y: 0, z: 0},
				colors.lightBrown,
				'middle-cube-basement')
			).mesh
		);


		// fans
		this.fans = [];

		const fansParams = [
			{x: 200, y: 100, z: -100, rx: -Math.PI / 2, rz: -Math.PI / 2},
			{x: 200, y: -50, z: 100, rx: -Math.PI / 2, rz: -Math.PI / 2}
		];

		for (let i = 0; i < fansParams.length; i++) {
			const fan = new Fan();
			fan.mesh.position.set(
				fansParams[i].x,
				fansParams[i].y,
				fansParams[i].z
			);
			fan.mesh.rotation.set(
				fansParams[i].rx,
				0,
				fansParams[i].rz
			);

			this.fans.push(fan);
		};


		// fence perimeter
		const fenceParams = [
			{x: 190, z: -190, ry: 0, mx: -1, mz: 0, count: 11},
			{x: 190, z: 185, ry: -Math.PI / 2, mx: 0, mz: -1, count: 10},
			{x: -190, z: 190, ry: 0, mx: 1, mz: 0, count: 4},
			{x: 80, z: 185, ry: Math.PI, mx: 1, mz: 0, count: 3},
		];
		const fenceWidth = 38;
		let fenceGeometry = new Geometry();

		for (let i = 0; i < fenceParams.length; i++) {

			for(let j = 0; j < fenceParams[i].count; j++) {

				const fence = (new Fence()).mesh;
				fence.position.set(
					fenceParams[i].x + (j * fenceParams[i].mx * fenceWidth),
					210,
					fenceParams[i].z + (j * fenceParams[i].mz * fenceWidth)
				);
				fence.rotation.y = fenceParams[i].ry;
				fence.updateMatrix();

				fenceGeometry.merge(fence.geometry, fence.matrix);
			};

		};

		const fencePerimeter = new Mesh(fenceGeometry, materials.wood);
		fencePerimeter.name = 'fence-perimeter';
		fencePerimeter.castShadow = true;
		fencePerimeter.receiveShadow = true;


		// pine
		const pine = new Pine([1.2, 2, 1.2]).mesh;
		pine.position.set(-140, 200, 140);


		// windvane
		const windvane = new Windvane();
		windvane.mesh.position.set(100, 200, -50);
		windvane.mesh.rotation.y += Math.PI / 16;

		this.windvane = windvane;


		// ladder
		const ladder = new Ladder().mesh;
		ladder.position.set(-158, 200, -90);
		ladder.rotation.z = Math.PI / 32;


		// stones
		const stonesCoordinates = [];

		for (let i = 0; i < 12; i++) {
			stonesCoordinates.push(
				[
					250 * Math.cos(i * Math.PI / 24),
					0,
					-180 * Math.sin(i * Math.PI / 24),
				]
			);
		};

		for (let i = 0; i < 8; i++) {
			stonesCoordinates.push(
				[
					150 * Math.cos(i * Math.PI / 16) + 10,
					0,
					-100 * Math.sin(i * Math.PI / 16),
				]
			);
		};

		const stones = new Stones(stonesCoordinates).mesh;
		stones.position.set(-210, 200, 170);


		// back side pipes
		const pipesGeometry = new Geometry();
		const glassGeometry = new Geometry();

		const pipesParams = [
			{
				type: 'straight',
				position: [80, -475, 125],
				rotation: [(Math.PI / 2), 0, 0]
			},
			{
				type: 'connection',
				position: [80, -475, 35],
				rotation: [(Math.PI / 2), 0, 0],
				options: {
					m: 1
				}
			},
			{
				type: 'arc',
				position: [80, -397.5, 20],
				rotation: [-(Math.PI / 2), (Math.PI / 2), -(Math.PI / 2)],
				options: {
					scale: 1.1
				}
			},
			{
				type: 'connection',
				position: [80, -300, -57.5],
				rotation: [0, 0, 0],
				options: {
					m: 8
				}
			},
			{
				type: 'straight',
				position: [-275, -75, 80],
				rotation: [0, 0, (Math.PI / 2)]
			},
			{
				type: 'connection',
				position: [-360, -75, 80],
				rotation: [0, 0, (Math.PI / 2)],
				options: {
					m: 1
				}
			},
			{
				type: 'arc',
				position: [-370, 0, 80],
				rotation: [0, 0, (Math.PI / 2)],
				options: {
					scale: 1.1
				}
			},
			{
				type: 'connection',
				position: [-450, 150, 80],
				rotation: [0, 0, 0],
				options: {
					m: 4
				}
			}
		];

		for (let i = 0; i < pipesParams.length; i++) {

			let pipe;
			
			// 
			function setParams(el, params) {
				el.position.set(
					params.position[0],
					params.position[1],
					params.position[2],
				);
				el.rotation.set(
					params.rotation[0],
					params.rotation[1],
					params.rotation[2],
				);
				el.updateMatrix();
			};

			switch (pipesParams[i].type) {
				case 'straight':
					pipe = new Mesh(
						new CylinderGeometry(35, 35, 150, 8, 1)
					);
					break;
				case 'connection':
					pipe = (new PipeConnection(pipesParams[i].options.m)).mesh;
					break;
				case 'arc':
					pipe = (new PipeCorner(false, false)).mesh;
					pipe.scale.set(
						pipesParams[i].options.scale,
						pipesParams[i].options.scale,
						pipesParams[i].options.scale
					);
					break;
			};
			setParams(pipe, pipesParams[i]);

			pipesGeometry.merge(pipe.geometry, pipe.matrix);

		};

		const pipes = new Mesh(pipesGeometry, materials.lightMetal);
		pipes.castShadow = true;
		pipes.receiveShadow = true;


		// final
		this.mesh.add(
			fencePerimeter,
			pine,
			windvane.mesh,
			ladder,
			stones,
			...(this.fans.map(fan => fan.mesh)),
			pipes
		);
		
	}
}