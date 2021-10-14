import { Geometry, Mesh, Object3D, CylinderGeometry, BoxGeometry } from 'three';

import { materials } from '../modules/materials';


export default class Fan {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'fan';

		const staticGroupGeometry = new Geometry();


		const base = new Mesh(
			new CylinderGeometry(8, 8, 10, 6, 1)
		);


		const pipe = new Mesh(
			new CylinderGeometry(5, 5, 400, 6, 1)
		);


		const engine = new Mesh(
			new CylinderGeometry(25, 25, 50, 8, 1)
		);
		engine.rotation.x += Math.PI / 2;
		engine.position.y += 200;
		engine.updateMatrix();


		staticGroupGeometry.merge(base.geometry, base.matrix);
		staticGroupGeometry.merge(pipe.geometry, pipe.matrix);
		staticGroupGeometry.merge(engine.geometry, engine.matrix);

		const staticGroup = new Mesh(staticGroupGeometry, materials.darkMetal);
		staticGroup.castShadow = true;
		staticGroup.receiveShadow = true;

	
		// propeller
		const propeller = new Object3D();

		const hubGeometry = new CylinderGeometry(10, 10, 30, 6, 1);
		const hub = new Mesh(hubGeometry, materials.darkMetal);
		hub.receiveShadow = true;
		hub.castShadow = true;
		hub.position.z += 30;
		hub.rotation.x = Math.PI / 2

		// blades
		let blades = [];
		const bladeGeometry = new BoxGeometry(20, 120, 2);

		for (let i = 0; i < 3; i++) {
			const blade = new Mesh(bladeGeometry, materials.white);

			blade.geometry.translate( 0, 120 / 6, 0 );

			blade.geometry.vertices[4].y += 5;
			blade.geometry.vertices[4].z -= 1;
			blade.geometry.vertices[5].y += 5;
			blade.geometry.vertices[5].z -= 1;

			blade.rotation.z = i * (2 * Math.PI / 3);
			blade.position.z += 40;

			blade.castShadow = true;
			blade.receiveShadow = true;

			blades.push(blade);
		};


		propeller.position.y += 200;
		propeller.add(hub, ...blades);

		this.propeller = propeller; // global for animation
	
		// final
		this.mesh.add(staticGroup, propeller);
	}

	rotate(value) {
		this.propeller.rotation.z += value;
	}
}