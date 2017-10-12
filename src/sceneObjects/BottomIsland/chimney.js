import { Mesh, Shape, Path, ExtrudeGeometry } from 'three';

// import Cube from '../../modules/Cube';
import { materials } from '../../modules/materials';


export default class Chimney {
	constructor() {

		const arcShape = new Shape();
		arcShape.moveTo(0, 0);
		arcShape.absarc(0, 0, 12, 0, Math.PI * 2);

		const holePath = new Path();
		holePath.moveTo(0, 0);
		holePath.absarc(0, 0, 10, 0, Math.PI * 2);
		arcShape.holes.push( holePath );


		const extrudeSettings = {
			amount: 1,
			steps: 1,
			bevelEnabled: false
		};

		
		const geometry = new ExtrudeGeometry(arcShape, extrudeSettings);
		
		this.mesh = new Mesh(geometry, materials.rust);
		this.mesh.rotation.x += Math.PI / 2;
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
		this.mesh.name = 'chimney';
	}	
}