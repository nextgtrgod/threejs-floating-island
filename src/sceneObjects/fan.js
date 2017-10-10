import { Geometry, Mesh, Object3D, CylinderGeometry, BoxGeometry } from 'three';

import { materials } from '../modules/materials';


export default class Fan {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'fan';

		const staticGroupGeometry = new Geometry();


		const baseGeometry = new CylinderGeometry(8, 8, 10, 8, 1);
		const base = new Mesh(baseGeometry);


		const pipeGeometry = new CylinderGeometry(5, 5, 400, 20, 1);
		const pipe = new Mesh(pipeGeometry);


		const engineGeometry = new BoxGeometry(30, 30, 50);
		const engine = new Mesh(engineGeometry);
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

		const hubGeometry = new CylinderGeometry(10, 10, 30, 10, 1);
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

	rotate = (value) => {
		this.propeller.rotation.z += value;
	}
}