import { Object3D } from 'three';

import Cube from '../../modules/Cube';
import { colors } from '../../modules/colors';


export default class BottomIsland {
	constructor() {

		this.mesh = new Object3D();

		// big cube
		this.mesh.add(
			(new Cube(
				[200, 200, 200],
				{x: 0, y: -200, z: 200},
				colors.darkGrey,
				'bottom-cube-basement')
			).mesh
		);
		
	}
}