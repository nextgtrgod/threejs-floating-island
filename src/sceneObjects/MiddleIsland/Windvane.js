import { Geometry, Mesh, Object3D, CylinderGeometry, Shape, ExtrudeGeometry } from 'three';

import Cube from '../../modules/Cube';
import { materials } from '../../modules/materials';


export default class Windvane {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'windwane';


		const standGeometry = new Geometry();


		const pillarGeometry = new Geometry();
	
		{
			const shaft	= new Cube(
				[20, 200, 15],
				{x: 0, y: 100, z: 0}
			).mesh;
	
			shaft.geometry.vertices[0].x -= 5;
			shaft.geometry.vertices[0].z -= 5;
			shaft.geometry.vertices[1].x -= 5;
			shaft.geometry.vertices[1].z += 5;
			shaft.geometry.vertices[4].x += 5;
			shaft.geometry.vertices[4].z += 5;
			shaft.geometry.vertices[5].x += 5;
			shaft.geometry.vertices[5].z -= 5;

			shaft.updateMatrix();
			
			pillarGeometry.merge(shaft.geometry, shaft.matrix);
	
			// beams
			for (let j = 0; j < 4; j++) {
				const beam = new Cube(
					[65, 10, 5],
					{
						x: -25,
						y: 30 + (j * 40),
						z: 0
					}
				).mesh;
	
				beam.rotation.z += (Math.PI / 4) * ((j % 2 === 0) ? (-1) : 1);
				beam.updateMatrix();
	
				pillarGeometry.merge(beam.geometry, beam.matrix);
			};
		};

		for (let i = 0; i < 4; i++) {

			const pillar = new Mesh(pillarGeometry, materials.wood);
			pillar.position.x += 40 * Math.cos(i * Math.PI / 2);
			pillar.position.z += 40 * Math.sin(i * Math.PI / 2);

			pillar.rotation.y += (Math.PI / 4) - i * (Math.PI / 2);

			pillar.updateMatrix();

			standGeometry.merge(pillar.geometry, pillar.matrix);
		};


		const platform = new Cube(
			[80, 10, 80],
			{x: 0, y: 200, z: 0},
		).mesh;
		platform.rotation.y -= Math.PI / 4;
		platform.updateMatrix();

		standGeometry.merge(platform.geometry, platform.matrix);


		// 
		const stand = new Mesh(standGeometry, materials.wood);
		stand.name = 'stand';
		stand.castShadow = true;
		stand.receiveShadow = true;
		stand.rotation.y += Math.PI / 4;


		// 
		const vaneSupportGeometry = new Geometry();

		{
			const bevel = new Mesh(new CylinderGeometry(2, 2, 60, 6, 1));
			bevel.rotation.z = Math.PI / 6;
			bevel.position.set(15, 230, 0);
			bevel.updateMatrix();

			const anotherBevel = bevel.clone();
			anotherBevel.rotation.z = -Math.PI / 6;
			anotherBevel.position.x = -15;
			anotherBevel.updateMatrix();

			const hub = new Mesh(new CylinderGeometry(4, 4, 6, 6, 1));
			hub.position.set(0, 255, 0);
			hub.updateMatrix();

			vaneSupportGeometry.merge(bevel.geometry, bevel.matrix);
			vaneSupportGeometry.merge(anotherBevel.geometry, anotherBevel.matrix);
			vaneSupportGeometry.merge(hub.geometry, hub.matrix);
		};

		const vaneSupport = new Mesh(vaneSupportGeometry, materials.lightMetal);
		vaneSupport.castShadow = true;
		vaneSupport.receiveShadow = true;


		const vane = new Object3D();

		{
			// axle
			const axle = new Mesh(new CylinderGeometry(2, 2, 100, 6, 1), materials.lightMetal);
			axle.position.set(0, 260, 0);
			axle.rotation.x += Math.PI / 2;
			axle.receiveShadow = true;
			axle.castShadow = true;


			// hub
			const hub = new Mesh(new CylinderGeometry(3, 3, 5, 6, 1), materials.lightMetal);
			hub.position.set(0, 260, 0);
			hub.receiveShadow = true;
			hub.castShadow = true;


			// tail
			const tailShape = new Shape();
			const tailWidth = 36;
			const tailHeight = 16;
			tailShape.moveTo(0, tailHeight / 2);
			tailShape.lineTo(tailWidth / 4, tailHeight);
			tailShape.lineTo(tailWidth, tailHeight);
			tailShape.lineTo(tailWidth - tailWidth / 4, tailHeight / 2);
			tailShape.lineTo(tailWidth, 0);
			tailShape.lineTo(tailWidth / 4, 0);
			tailShape.moveTo(0, tailHeight / 2);

			const extrudeSettings = {
				steps: 2,
				amount: 4,
				bevelEnabled: false
			};

			const tail = new Mesh(
				new ExtrudeGeometry(tailShape, extrudeSettings),
				materials.red
			);
			tail.castShadow = true;
			tail.receiveShadow = true;

			tail.position.set(-2, 260 - (tailHeight / 2), -25);
			tail.rotation.y = Math.PI / 2;


			// windvane fan
			const fan = new Object3D();


			const fanBladesGeometry = new Geometry();

			for (let i = 0; i < 12; i++) {
				const blade = new Cube(
					[45, 2, 1],
					{
						x: 4 * Math.cos(i * (Math.PI / 6)),
						y: 4 * Math.sin(i * (Math.PI / 6)),
						z: 0
					}
				).mesh;
				blade.geometry.translate(20, 0, 0);

				blade.geometry.vertices[1].z -= 4;
				blade.geometry.vertices[1].y += 10;

				blade.rotation.z += i * Math.PI / 6;
				blade.updateMatrix();

				fanBladesGeometry.merge(blade.geometry, blade.matrix);
			};
														  // temp material
			const fanBlades = new Mesh(fanBladesGeometry, materials.lightMetal);
			fanBlades.castShadow = true;
			fanBlades.receiveShadow = true;


			// fan center
			const fanCenter = new Mesh(
				new CylinderGeometry(4, 4, 4, 6, 1),
				materials.darkMetal
			);
			fanCenter.rotation.x = Math.PI / 2;
			fanCenter.castShadow = true;
			fanCenter.receiveShadow = true;


			fan.add(fanBlades, fanCenter);
			fan.position.set(0, 260, 45);
			this.fan = fan;

			// final
			vane.add(axle, hub, tail, fan);
		};


		// final
		this.mesh.add(
			stand,
			vaneSupport,
			vane
		);
	}
}