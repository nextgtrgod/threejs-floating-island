import {
	Object3D,
	Mesh,
	Geometry,
	CylinderGeometry,
	LatheGeometry,
	Vector2,
	Shape,
	ExtrudeGeometry,
	Matrix4 } from 'three';

import { materials } from '../../modules/materials';


export default class Fan {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'zeppelin-fan';


		
		// engine
		const engineRadius = 30;
		const engineGeometry = new Geometry();
		
		const engineMain = new Mesh(
			new CylinderGeometry(engineRadius, engineRadius - 5, (engineRadius * 2), 16, 1, true)
		);

		const engineTopPoints = [];

		for (let i = 0; i < 16; i++) {
			engineTopPoints.push(
				new Vector2(
					engineRadius * Math.cos( i * (Math.PI / 32) ),
					engineRadius * Math.sin( i * (Math.PI / 32) ) / 3
				)
			);
		};

		const engineTop = new Mesh(
			new LatheGeometry( engineTopPoints, 16 ),
		);
		engineTop.position.y += engineRadius;
		engineTop.updateMatrix();


		const engineTier = new Mesh(
			new CylinderGeometry(5, 5, 120, 6, 1)
		);
		engineTier.position.set( -60, 0, 0 )
		engineTier.rotation.z -= Math.PI / 2;
		engineTier.updateMatrix();


		// for (let i = -2; i < 4; i++) {
		// 	let engineSegment = new Mesh(
		// 		new CylinderGeometry(4, 4, 20, 3, 1)
		// 	);
		// 	engineSegment.rotation.set(Math.PI / 2, Math.PI / 3, 0);
		// 	engineSegment.position.set(engineRadius - 2, i * 8, 0);
		// 	engineSegment.updateMatrix();

		// 	engineGeometry.merge(engineSegment.geometry, engineSegment.matrix);
		// };

		const engineHub = new Mesh(
			new CylinderGeometry(5, 10, 15, 8, 1, true)
		);
		engineHub.position.y += 40;
		engineHub.updateMatrix();


		engineGeometry.merge(engineMain.geometry, engineMain.matrix);
		engineGeometry.merge(engineTop.geometry, engineTop.matrix);
		engineGeometry.merge(engineTier.geometry, engineTier.matrix);
		engineGeometry.merge(engineHub.geometry, engineHub.matrix);

		const engine = new Mesh(engineGeometry, materials.lightMetal);
		engine.castShadow = true;
		engine.receiveShadow = true;



		// propeller
		const propellerGeometry = new Geometry();

		const pipe = new Mesh(
			new CylinderGeometry(4, 4, 250, 8, 1)
		);
		pipe.position.set(0, 100, 0);
		pipe.updateMatrix();


		const bladesHub = new Mesh(
			new CylinderGeometry(12, 5, 10, 8, 1)
		);
		bladesHub.position.set(0, 215, 0);
		bladesHub.updateMatrix();


		const bladesGeometry = new Geometry();

		const bladeShape = new Shape();

		bladeShape.moveTo(0, -5);
		for (let i = -4; i < 4; i++) {
			bladeShape.lineTo(
				120 + 10 * Math.cos(i * Math.PI / 8),
				10 * Math.sin(i * Math.PI / 8)
			);
		};
		bladeShape.lineTo(0, 5);

	
		for (let i = 0; i < 4; i++) {
			let blade = new Mesh(
				new ExtrudeGeometry(
					bladeShape,
					{
						steps: 1,
						amount: 2,
						bevelEnabled: false
					}
				)
			);
			blade.rotation.z += i * (Math.PI / 2);
			blade.updateMatrix();

			bladesGeometry.merge(blade.geometry, blade.matrix);
		}

		const blades = new Mesh(bladesGeometry, materials.white);
		blades.position.set(0, 222, 0);
		blades.geometry.applyMatrix( new Matrix4().makeRotationX( Math.PI / 2 ) );
		blades.updateMatrix();


		propellerGeometry.merge(pipe.geometry, pipe.matrix);
		propellerGeometry.merge(bladesHub.geometry, bladesHub.matrix);
		propellerGeometry.merge(blades.geometry, blades.matrix);

		this.propeller = new Mesh(propellerGeometry, materials.white);
		this.propeller.castShadow = true;
		this.propeller.receiveShadow = true;

		// final
		this.mesh.add(
			engine,
			this.propeller
		);
	}

	rotate = (value) => {
		this.propeller.rotation.y += value
	}
}