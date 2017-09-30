import { Object3D } from 'three';

import Cube from '../../modules/Cube';
import { colors } from '../../modules/colors';


export default class BottomIsland {
	constructor() {

		this.mesh = new Object3D();

		// big cube
		this.mesh.add(
			(new Cube(
				[400, 400, 400],
				{x: 0, y: -400, z: 400},
				colors.darkGrey,
				'bottom-cube-basement')
			).mesh
		);
		
	}
}