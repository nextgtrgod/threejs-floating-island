import { Object3D } from 'three';

import Cube from '../../modules/Cube';
import Fence from '../fence';
import Fan from '../fan';
import House from './House';

import { colors } from '../../modules/colors';


export default class TopIsland {
	constructor() {

		this.mesh = new Object3D();

		// big cube
		this.mesh.add(
			(new Cube(
				[400, 400, 400],
				{ x: -400, y: 400, z: 0 },
				colors.lightGreen,
				'top-cube-basement')
			).mesh
		);


		// fans
		this.fans = [];

		{
			const fan = new Fan();
			fan.mesh.position.x -= (400 + 100);
			fan.mesh.position.y += (400 + 100);
			fan.mesh.position.z += 200;
			fan.mesh.rotation.x = Math.PI / 2;
			fan.mesh.rotation.y = Math.PI / 2;

			this.fans.push(fan);
		};

		{
			const fan = new Fan();
			fan.mesh.position.x -= (400 - 100);
			fan.mesh.position.y += (400 - 100);
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
		house.mesh.position.x -= 300;
		house.mesh.position.y += 600;

		this.mesh.add(house.mesh);


		// fence
		let fences = [];
		for (let i = 0; i < 10; i++) {
			const fence = new Fence();
			fence.mesh.position.x -= (220 + i * fence.width) ;
			fence.mesh.position.y += 600;
			fence.mesh.position.z += 190;

			fences.push(fence.mesh);
		};

		for (let i = 0; i < 10; i++) {
			const fence = new Fence();
			fence.mesh.position.x -= 592.5;
			fence.mesh.position.y += 600;
			fence.mesh.position.z += 190 - (i *fence.width);

			fence.mesh.rotation.y = - (Math.PI / 2);

			fences.push(fence.mesh);
		};

		for (let i = 0; i < 10; i++) {
			const fence = new Fence(( i === 9 ? true : false));
			fence.mesh.position.x -= (592.5 - i * fence.width);
			fence.mesh.position.y += 600;
			fence.mesh.position.z -= 190;

			fence.mesh.rotation.y = Math.PI;

			fences.push(fence.mesh);
		};

		for (let i = 0; i < 3; i++) {
			const fence = new Fence();
			fence.mesh.position.x -= 220;
			fence.mesh.position.y += 600;
			fence.mesh.position.z += ((fence.width * 2) + i * (fence.width)) + 5;
	
			fence.mesh.rotation.y = Math.PI / 2;

			fences.push(fence.mesh);
		};

		this.mesh.add(...fences);

	}
}