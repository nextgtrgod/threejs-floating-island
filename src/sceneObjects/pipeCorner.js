import { Mesh, Object3D, TorusGeometry, MeshPhongMaterial, DoubleSide } from 'three';

import { colors } from '../modules/colors';


export default class PipeCorner {
	constructor() {

		this.mesh = new Object3D();

		// pipe
		const pipeMaterial = new MeshPhongMaterial({
			color: colors.lightGrey,
			flatShading: true,
			side: DoubleSide
		});

		const pipeGeometry = new TorusGeometry(70, 35, 30, 50, (Math.PI / 2) );
		const pipe = new Mesh(pipeGeometry, pipeMaterial);
		
		pipe.receiveShadow = true;
		pipe.castShadow = true;


		// 
		const connection = new Object3D();

		const connectionFrontGeometry = new TorusGeometry(35, 4, 4, 16, (2 * Math.PI) );
		const connectionFront = new Mesh(connectionFrontGeometry, pipeMaterial);
		connectionFront.castShadow = true;
		connectionFront.receiveShadow = true;
	
		connection.add(connectionFront);
		connection.position.x += 70;
		connection.rotation.x = Math.PI / 2;

		// final
		this.mesh.add(
			pipe,
			connection
		);

		this.mesh.rotation.z = Math.PI / 2;
	}
}