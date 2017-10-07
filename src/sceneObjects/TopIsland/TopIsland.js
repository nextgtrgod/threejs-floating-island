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

		{
			const fan = new Fan();
			fan.mesh.position.x -= 100;
			fan.mesh.position.y += 100;
			fan.mesh.position.z += 200;
			fan.mesh.rotation.x = Math.PI / 2;
			fan.mesh.rotation.y = Math.PI / 2;

			this.fans.push(fan);
		};

		{
			const fan = new Fan();
			fan.mesh.position.x += 100;
			fan.mesh.position.y -= 100;
			fan.mesh.position.z += 200;
			fan.mesh.rotation.x = Math.PI / 2;
			fan.mesh.rotation.y = Math.PI / 2;

			this.fans.push(fan);
		};

		this.fans.map(fan => {
			this.mesh.add(fan.mesh)
		});


		// house
		const house = new House();
		house.mesh.position.x += 100;
		house.mesh.position.y += 200;

		this.mesh.add(
			house.mesh
		);


		// fence
		let fenceGeometry = new Geometry();

		for (let i = 0; i < 10; i++) {
			const fence = new Fence();
			fence.mesh.position.x += (190 - i * fence.width);
			fence.mesh.position.y += 200;
			fence.mesh.position.z += 190;

			fence.mesh.updateMatrix();
			fenceGeometry.merge(fence.mesh.geometry, fence.mesh.matrix);
		};

		for (let i = 0; i < 10; i++) {
			const fence = new Fence();
			fence.mesh.position.x -= 187;
			fence.mesh.position.y += 200;
			fence.mesh.position.z += 190 - (i * fence.width);

			fence.mesh.rotation.y = - (Math.PI / 2);

			fence.mesh.updateMatrix();
			fenceGeometry.merge(fence.mesh.geometry, fence.mesh.matrix);
		};

		for (let i = 0; i < 10; i++) {
			const fence = new Fence((i === 9 ? true : false));
			fence.mesh.position.x -= (187 - i * fence.width);
			fence.mesh.position.y += 200;
			fence.mesh.position.z -= 187;

			fence.mesh.rotation.y = Math.PI;

			fence.mesh.updateMatrix();
			fenceGeometry.merge(fence.mesh.geometry, fence.mesh.matrix);
		};

		for (let i = 0; i < 3; i++) {
			const fence = new Fence();
			fence.mesh.position.x += 190;
			fence.mesh.position.y += 200;
			fence.mesh.position.z += ((fence.width * 2) + i * (fence.width)) + 5;

			fence.mesh.rotation.y = Math.PI / 2;

			fence.mesh.updateMatrix();
			fenceGeometry.merge(fence.mesh.geometry, fence.mesh.matrix);
		};

		const fencePerimeter = new Mesh(fenceGeometry, materials.wood);
		fencePerimeter.name = 'fence-perimeter';
		fencePerimeter.castShadow = true;
		fencePerimeter.receiveShadow = true;

		this.mesh.add(
			fencePerimeter
		);


		// pines
		{
			const pine = (new Pine([1, 1, 1])).mesh;
			pine.position.x += 140;
			pine.position.y += 200;
			pine.position.z += 140;

			this.mesh.add(pine);
		};

		{
			const pine = (new Pine([1, 1.2, 1])).mesh;
			pine.position.x += 40;
			pine.position.y += 200;
			pine.position.z += 140;

			this.mesh.add(pine);
		};

		{
			const pine = (new Pine([1.1, 1.5, 1.1])).mesh;
			pine.position.x -= 80;
			pine.position.y += 200;
			pine.position.z += 140;

			this.mesh.add(pine);
		};

		{
			const pine = (new Pine([1.6, 1.8, 1.6])).mesh;
			pine.position.x -= 80;
			pine.position.y += 200;
			pine.position.z -= 80;

			this.mesh.add(pine);
		};


		const pipeCorner = (new PipeCorner()).mesh;
		pipeCorner.position.x -= 60;
		pipeCorner.position.y += 200;
		pipeCorner.position.z += 40;

		this.mesh.add(pipeCorner);

		this.mesh.position.set(-400, 400, 0);
	}
}