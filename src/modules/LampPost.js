import {
	Object3D,
	Geometry,
	CylinderGeometry,
	Mesh,
	PointLight } from 'three';

import Cube from './Cube';

import { materials } from './materials';


export default class LampPost {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'lamp-post';

		// base
		const baseVertical = (new Cube(
			[8, 100, 8]
		)).mesh;
		baseVertical.geometry.vertices[2].x += 1;
		baseVertical.geometry.vertices[2].z += 1;
		baseVertical.geometry.vertices[3].x += 1;
		baseVertical.geometry.vertices[3].z -= 1;
		baseVertical.geometry.vertices[6].x -= 1;
		baseVertical.geometry.vertices[6].z -= 1;
		baseVertical.geometry.vertices[7].x -= 1;
		baseVertical.geometry.vertices[7].z += 1;
		baseVertical.updateMatrix();

		const baseHorizontal = (new Cube(
			[6, 6, 40],
			{x: 0, y: 45, z: 12}
		)).mesh;

		const baseAngle = (new Cube(
			[4, 4, 20],
			{x: 0, y: 38, z: 10}
		)).mesh;
		baseAngle.rotation.x -= Math.PI / 4;
		baseAngle.updateMatrix();


		const baseGeometry = new Geometry();
		baseGeometry.merge(baseVertical.geometry, baseVertical.matrix);
		baseGeometry.merge(baseHorizontal.geometry, baseHorizontal.matrix);
		baseGeometry.merge(baseAngle.geometry, baseAngle.matrix);

		const base = new Mesh(baseGeometry, materials.wood);
		base.castShadow = true;
		base.receiveShadow = true;


		// lamp
		const lamp = new Mesh(
			new CylinderGeometry(1, 6, 4, 8),
			materials.darkMetal
		);
		lamp.castShadow = true;
		lamp.receiveShadow = true;
		lamp.position.set(0, 40, 30);


		// light
		this.light = new PointLight(0xfddb92, 0, 0, 0);

		this.light.castShadow = false;
		this.light.shadow.mapSize.width = 16;
		this.light.shadow.mapSize.height = 16;

		this.light.position.set(-10, 30, 30);


		this.mesh.add(
			base,
			lamp,
			this.light
		);
	}

	turnLights(status) {
		if (status) {
			this.light.intensity = .95;
			this.light.distance = 1000;
			this.light.decay = 2;
			this.light.castShadow = true;
			this.light.shadow.mapSize.width = 128;
			this.light.shadow.mapSize.height = 128;
		} else {
			this.light.intensity = 0;
			this.light.distance = 1;
			this.light.decay = 1;
			this.light.castShadow = false;
			this.light.shadow.mapSize.width = 8;
			this.light.shadow.mapSize.height = 8;
		};
	}
}