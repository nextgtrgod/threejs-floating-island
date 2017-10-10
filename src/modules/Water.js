import {
	Object3D,
	Mesh,
	Curve,
	Vector3,
	TubeGeometry,
	Geometry } from 'three';

import { materials } from './materials';


export default class Water {
	constructor() {

		// river path
		class CustomSinCurve {
            constructor(scale = 1) {

                Curve.call(this);

                this.scale = scale;
            }

            getPoint = (t) => {

                const tx = t * 3 - 1.5;
                const ty = Math.sin(2 * Math.PI * t);
                const tz = 0;

                return new Vector3(tx, ty, tz).multiplyScalar(this.scale);
            }
        }
        CustomSinCurve.prototype = Object.create(Curve.prototype);
		CustomSinCurve.prototype.constructor = CustomSinCurve;


        const path = new CustomSinCurve(100);
        const geometry = new TubeGeometry(path, 35, 35, 50, false);
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


        const mesh = new Mesh(geometry, material);

        this.mesh = mesh;
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