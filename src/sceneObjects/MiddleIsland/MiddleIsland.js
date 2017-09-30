import { Object3D } from 'three';

import Cube from '../../modules/Cube';
import Fan from '../fan';

import { colors } from '../../modules/colors';


export default class MiddleIsland {
	constructor() {

		this.mesh = new Object3D();

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

		{
			const fan = new Fan();
			fan.mesh.position.x += 200;
			fan.mesh.position.y += 100;
			fan.mesh.position.z -= 100;
			fan.mesh.rotation.z = (- Math.PI / 2)

			this.fans.push(fan);
		};

		{
			const fan = new Fan();

			fan.mesh.position.x += 200;
			fan.mesh.position.y -= 50;
			fan.mesh.position.z += 100;
			fan.mesh.rotation.z = (- Math.PI / 2)

			this.fans.push(fan);
		};

		this.fans.map(fan => {
			this.mesh.add(fan.mesh)
		});
		
	}
}