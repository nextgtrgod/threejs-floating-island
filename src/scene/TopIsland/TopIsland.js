import { Object3D, Mesh, Geometry, MeshPhongMaterial } from 'three';

import Cube from '../../modules/Cube';
import Fence from '../fence';
import Fan from '../fan';
import Pine from '../pine';
import PipeCorner from '../pipeCorner';
import House from './House';

import { colors } from '../../modules/colors';
import { materials } from '../../modules/materials';


export default class TopIsland {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'top-island';

		// big cube
		this.mesh.add(
			(new Cube(
				[400, 400, 400],
				{ x: 0, y: 0, z: 0 },
				colors.lightGreen)
			).mesh
		);


		// fans
		this.fans = [];

		const fansParams = [
			{ x: -100, y: 100 },
			{ x: 100, y: -100 }
		];

		for (let i = 0; i < fansParams.length; i++) {	
			const fan = new Fan();
			fan.mesh.position.set(
				fansParams[i].x,
				fansParams[i].y,
				200
			);
			fan.mesh.rotation.set(
				Math.PI / 2,
				Math.PI,
				0
			);
			this.fans.push(fan);
		};

		this.fans.map(fan => {
			this.mesh.add(fan.mesh)
		});


		// house
		const house = (new House()).mesh;
		house.position.x += 70;
		house.position.y += 200;
		house.position.z += 5;
		house.rotation.y -= Math.PI / 16;

		this.mesh.add(
			house
		);


		// fence perimeter
		let fenceGeometry = new Geometry();

		const fenceParams = [
			{x: 190, z: 187, ry: 0, mx: -1, mz: 0, count: 10},
			{x: -187, z: 185, ry: -Math.PI / 2, mx: 0, mz: -1, count: 10},
			{x: -187, z: -187, ry: Math.PI, mx: 1, mz: 0, count: 10},
			{x: 190, z: 118, ry: Math.PI / 2, mx: 0, mz: 1, count: 2},
			{x: 187, z: -155, ry: -Math.PI / 2, mx: 0, mz: -1, count: 1},
		];
		const fenceWidth = 38;

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

		this.mesh.add(
			fencePerimeter
		);


		// pines
		const pineParams = [
			{ x: 120, y: 200, z: 140, sx: 1, sy: 1, sz: 1 },
			{ x: 15, y: 200, z: 140, sx: 1, sy: 1.2, sz: 1 },
			{ x: -100, y: 200, z: 140, sx: 1.1, sy: 1.5, sz: 1.1 },
			{ x: -90, y: 200, z: -80, sx: 1.6, sy: 1.8, sz: 1.6 },
		];

		for (let i = 0; i < pineParams.length; i++) {
			const pine = (new Pine([
				pineParams[i].sx,
				pineParams[i].sy,
				pineParams[i].sz
			])).mesh;
			pine.position.set(
				pineParams[i].x,
				pineParams[i].y,
				pineParams[i].z
			);

			this.mesh.add(pine);
		};


		// pipe corner
		const pipeCorner = (new PipeCorner()).mesh;
		pipeCorner.position.x -= 60;
		pipeCorner.position.y += 215;
		pipeCorner.position.z += 40;

		this.mesh.add(pipeCorner);

		this.mesh.position.set(-400, 400, 0);
	}
}