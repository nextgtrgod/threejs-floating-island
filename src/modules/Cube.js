import { Mesh, BoxGeometry, MeshPhongMaterial } from 'three';

import { colors } from './colors';


export default class Cube {
	constructor(
		size = [100, 100, 100],
		position = { x: 0, y: 0, z: 0 },
		color = null, name = `cube-${~~(Math.random() * 1000)}`) {

		this.width 	= size[0];
		this.height = size[1];
		this.depth 	= size[2];

		this.color = color;

		this.geometry = new BoxGeometry(this.width, this.height, this.depth);

		this.material;

		if (this.color) {
			this.material = new MeshPhongMaterial({
				color: this.color,
				flatShading: true,
				// transparent: true,
				// opacity: .6
			});
		} else {
			this.material = null
		};

		this.mesh = new Mesh(this.geometry, this.material);
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;

		this.mesh.position.x += position.x;
		this.mesh.position.y += position.y;
		this.mesh.position.z += position.z;
		
		this.mesh.name = name;

		this.mesh.updateMatrix();
	}
}