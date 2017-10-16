import {
	Vector2,
	Mesh,
	Geometry,
	ExtrudeGeometry,
	LatheGeometry,
	Shape,
	Object3D,
	EdgesGeometry,
	LineBasicMaterial,
LineSegments } from 'three';

import { materials } from '../../modules/materials';


export default class Balloon {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'zeppelin-balloon';

		const radius = 200;
		const pointsCount = 12;


		// points
		const points = [];
		for (let i = 0; i < pointsCount; i++) {
			points.push(
				new Vector2(
					radius * Math.sin( i * (Math.PI / pointsCount) ),
					radius * Math.cos( i * (Math.PI / pointsCount) ) * 2
				)
			);
		};


	
		// balloon
		const balloon = new Mesh(
			new LatheGeometry( points ),
			materials.balloon
		);
		// balloon.castShadow = true;
		balloon.receiveShadow = true;



		// frame
		const frameShape = new Shape();
		frameShape.moveTo( points[0].y, points[0].x );

		for (let i = 1; i < (points.length - 1); i++) {
	
			frameShape.lineTo( points[i].y, points[i].x );
	
		};
		frameShape.moveTo( points[points.length] );

		const frame = new Mesh(
			new ExtrudeGeometry(
				frameShape,
				{
					steps: 1,
					amount: 20,
					bevelEnabled: false
				}
			),
			materials.lightMetal
		);
		// frame.rotation.y += Math.PI / 6;
		frame.rotation.z -= Math.PI / 2;
		frame.position.set(5, 0, -10);

		frame.castShadow = true;
		frame.receiveShadow = true;


		// final
		this.mesh.add(
			balloon,
			frame
		);

		this.mesh.rotation.x = Math.PI / 2;

	}
}