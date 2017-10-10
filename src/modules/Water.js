import { Shape, Mesh, Vector3, ExtrudeGeometry, CatmullRomCurve3 } from 'three';

import { materials } from './materials';


export default class Water {
	constructor(points = [new Vector3(0, 0, 0), new Vector3(1, 1, 1)], steps = 10) {

		// river path
		const spline = new CatmullRomCurve3(points);

		var extrudeSettings = {
			steps			: steps,
			bevelEnabled	: false,
			extrudePath		: spline
		};

		const circle = new Shape();
		const cirlceRadius = 36;
		const circleSegments = 16;

		circle.moveTo(cirlceRadius * Math.cos(0), cirlceRadius * Math.sin(0));

		for (let i = 1; i < circleSegments; i++) {
			circle.lineTo(
				cirlceRadius * Math.cos(circleSegments * (2 * Math.PI) / i),
				cirlceRadius * Math.sin(circleSegments * (2 * Math.PI) / i) / 1.5
			);
		};

        const geometry = new ExtrudeGeometry(circle, extrudeSettings);
        const material = materials.water;


		// animation prepare
        geometry.mergeVertices();

		const l = geometry.vertices.length;
	
        this.waves = [];

        for (let i = 0; i < l; i++) {

			const v = geometry.vertices[i];

			this.waves.push({
				y: v.y,
				x: v.x,
				z: v.z,
				ang: Math.random() * Math.PI * 2,
				amp: 5 + Math.random() * 15,
				speed: 0.032 + Math.random() * 0.064
			});
		};
		
		this.mesh =  new Mesh(geometry, material);
		this.mesh.receiveShadow = true;
		this.mesh.castShadow = true;
	}


	moveWaves = () => {

		const verts = this.mesh.geometry.vertices;
		const l = verts.length;

		for (let i = 0; i < l; i++) {
			
			const v = verts[i];

			// get the data associated to it
			const vprops = this.waves[i];

			// update the position of the vertex
			v.x = vprops.x - Math.cos(vprops.ang) * vprops.amp;
			v.y = vprops.y + Math.sin(vprops.ang) * vprops.amp;

			// increment the angle for the next frame
			vprops.ang += vprops.speed;

		}

		this.mesh.geometry.verticesNeedUpdate = true;
	}
}