import {
	Object3D,
	Vector3,
	Geometry,
	LineSegments,
	BoxGeometry,
	Mesh
} from 'three';


import { materials } from '../../modules/materials';


export default class Filter {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'filter';


		// pillars
		const pillarsGeometry = new Geometry();

		const pillar = new Mesh(new BoxGeometry(5, 40, 20));

		const anotherPillar = pillar.clone();
		anotherPillar.position.x -= 80;
		anotherPillar.updateMatrix();

		pillarsGeometry.merge(pillar.geometry, pillar.matrix);
		pillarsGeometry.merge(anotherPillar.geometry, anotherPillar.matrix);

		const pillars = new Mesh(pillarsGeometry, materials.rust);
		pillars.castShadow = true;
		pillars.receiveShadow = true;


		// filter (lines)
		const linesGeometry = new Geometry();

		for (let i = 0; i < 4; i++) {
			
			let y = i * 5;

			linesGeometry.vertices.push( new Vector3(0, y, 0) );
			linesGeometry.vertices.push( new Vector3(-80, y, 0 ) );
		};

		const lines = new LineSegments(linesGeometry, materials.line);
		lines.castShadow = true;
		lines.receiveShadow = true;


		this.mesh.add(
			pillars,
			lines
		);
	}
}