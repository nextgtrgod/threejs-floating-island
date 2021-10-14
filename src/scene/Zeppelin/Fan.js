import {
	Object3D,
	Mesh,
	Geometry,
	CylinderGeometry,
	LatheGeometry,
	Vector2,
	Vector3,
	Shape,
	ExtrudeGeometry,
	Matrix4 } from 'three';

import Hose from './hose';
import Cube from '../../modules/Cube';
import { materials } from '../../modules/materials';


export default class Fan {
	constructor(full = true, mirrored = false) {

		this.mesh = new Object3D();
		this.mesh.name = 'zeppelin-fan';


		
		// engine
		const engineRadius = 40;
		const engineGeometry = new Geometry();
		
		const engineMain = new Mesh(
			new CylinderGeometry(engineRadius, engineRadius - 5, (engineRadius * 2), 16, 1)
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
			new LatheGeometry( engineTopPoints, 8 ),
		);
		engineTop.position.y += engineRadius;
		engineTop.updateMatrix();


		const engineTier = new Mesh(
			new CylinderGeometry(5, 5, 120, 6, 1)
		);
		engineTier.position.set( -60, 0, 0 )
		engineTier.rotation.z -= Math.PI / 2;
		engineTier.updateMatrix();


		if (full) {
			// engine air flow grid
			const sideLeft = (new Cube( [15, 45, 1] )).mesh;
			sideLeft.position.set(35, 5, 15);
			sideLeft.updateMatrix();

			const sideRight = sideLeft.clone();
			sideLeft.position.z -= 30;
			sideLeft.updateMatrix();

			engineGeometry.merge(sideLeft.geometry, sideLeft.matrix);
			engineGeometry.merge(sideRight.geometry, sideRight.matrix);

			for (let i = -2; i < 4; i++) {
				let engineSegment = new Mesh(
					new CylinderGeometry(4, 4, 30, 3, 1)
				);
				engineSegment.rotation.set(Math.PI / 2, Math.PI / 3, 0);
				engineSegment.position.set(
					(engineRadius + i / 2 - 2),
					(i * 8),
					0
				);
				engineSegment.updateMatrix();
	
				engineGeometry.merge(engineSegment.geometry, engineSegment.matrix);
			};

			// hose
			let m = (mirrored) ? (-1) : 1;
			
			const hose = new Hose(4, [
				new Vector3(-10, 28, m * 35),
				new Vector3(0, 5, m * 50),
				new Vector3(10, -4, m * 55),
				new Vector3(20, -8, m * 50),
				new Vector3(24, -12, m * 40),
				new Vector3(20, -16, m * 25),
			]).mesh;

			engineGeometry.merge(hose.geometry, hose.matrix);
		};

		const engineHub = new Mesh(
			new CylinderGeometry(5, 10, 15, 6, 1, true)
		);
		engineHub.position.y += 58;
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
			new CylinderGeometry(4, 4, 280, 6, 1)
		);
		pipe.position.set(0, 100, 0);
		pipe.updateMatrix();


		const bladesHub = new Mesh(
			new CylinderGeometry(12, 5, 10, 6, 1)
		);
		bladesHub.position.set(0, 228, 0);
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
						curveSegments: 8,
						steps: 1,
						depth: 2,
						bevelEnabled: false
					}
				)
			);
			blade.rotation.z += i * (Math.PI / 2);
			blade.updateMatrix();

			bladesGeometry.merge(blade.geometry, blade.matrix);
		}

		const blades = new Mesh(bladesGeometry, materials.white);
		blades.position.set(0, 235, 0);
		blades.geometry.applyMatrix4( new Matrix4().makeRotationX( Math.PI / 2 ) );
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

	rotate(value) {
		this.propeller.rotation.y += value
	}
}