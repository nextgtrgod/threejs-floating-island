import {
	Geometry,
	ExtrudeGeometry,
	CylinderGeometry,
	Mesh,
	Object3D,
	Shape,
	Path } from 'three';

import Cube from '../../modules/Cube';
import { materials } from '../../modules/materials';


export default class Turbine {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'turbine';

		const turbineGeometry = new Geometry();

	
		const turbineOuterShape = new Shape();
		turbineOuterShape.moveTo(0, 0);
		turbineOuterShape.absarc(0, 0, 60, 0, Math.PI * 2);

		const holePath = new Path();
		holePath.moveTo(0, 0);
		holePath.absarc(0, 0, 55, 0, Math.PI * 2);
		turbineOuterShape.holes.push( holePath );

		const turbineOuter = new Mesh(
			new ExtrudeGeometry(
				turbineOuterShape,
				{
					amount: 80,
					steps: 1,
					bevelEnabled: false
				}
			)
		);
		turbineOuter.position.z -= 40
		turbineOuter.updateMatrix();


		// pipe
		const pipe = (new Cube(
			[150, 5, 30],
			{x: -130, y: 0, z: 0}
		)).mesh;


		// engine support
		const engineSupport = (new Cube(
			[118, 5, 10]
		)).mesh;
		engineSupport.rotation.z += Math.PI / 4;
		engineSupport.updateMatrix();


		const engine = new Mesh(
			new CylinderGeometry(20, 20, 50, 8, 1)
		);
		engine.rotation.x += Math.PI / 2;
		engine.updateMatrix();



		turbineGeometry.merge(turbineOuter.geometry, turbineOuter.matrix);
		turbineGeometry.merge(pipe.geometry, pipe.matrix);
		turbineGeometry.merge(engineSupport.geometry, engineSupport.matrix);
		turbineGeometry.merge(engine.geometry, engine.matrix);

		const turbine = new Mesh(turbineGeometry, materials.darkMetal);
		turbine.castShadow = true;
		turbine.receiveShadow = true;


		// propeller
		const propellerGeometry = new Geometry();

		for (let i = 0; i < 12; i++) {
			const blade = new Cube(
				[50, 2, 1],
				{
					x: 4 * Math.cos(i * (Math.PI / 6)),
					y: 4 * Math.sin(i * (Math.PI / 6)),
					z: 30
				}
			).mesh;
			blade.geometry.translate(20, 0, 0);

			blade.geometry.vertices[1].z -= 8;
			blade.geometry.vertices[1].y += 10;

			blade.rotation.z += i * Math.PI / 6;
			blade.updateMatrix();

			propellerGeometry.merge(blade.geometry, blade.matrix);
		};

		// hub
		const propellerHub = new Mesh(
			new CylinderGeometry(10, 1, 10, 8, 1)
		);
		propellerHub.rotation.x -= Math.PI / 2;
		propellerHub.position.z += 35;
		propellerHub.updateMatrix();
		propellerGeometry.merge(propellerHub.geometry, propellerHub.matrix);


		// full propeller
		this.propeller = new Mesh(propellerGeometry, materials.lightMetal);
		this.propeller.castShadow = true;
		this.propeller.receiveShadow = true;


		this.mesh.add(
			turbine,
			this.propeller
		);
	}

	rotate = (value) => {
		this.propeller.rotation.z += value;
	}
}