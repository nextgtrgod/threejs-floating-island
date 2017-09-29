import { Object3D } from 'three';

import Cube from '../../modules/Cube';
import { colors } from '../../modules/colors';


export default class TopIsland {
	constructor() {

		this.mesh = new Object3D();

		// big cube
		this.mesh.add(
			(new Cube(
				[200, 200, 200],
				{x: -200, y: 200, z: 0},
				colors.lightGreen,
				'top-cube-basement')
			).mesh
		);
		
	}
}