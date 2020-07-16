import {
	Object3D,
	Vector3,
	Geometry,
	Line,
	LineSegments,
	BoxGeometry,
	Mesh
} from 'three';

import { colors } from '../../modules/colors';
import { materials } from '../../modules/materials';


export default class Fence {
	constructor(isClosed = false) {

		this.mesh = new Object3D;
		this.mesh.name = 'fence';

		const height = 90;
		const width = (400 - 10) / 3;

		const gridHeight = height - 20;
		const angle = Math.atan(gridHeight / width);


		// pillars
		const pillarsGeometry = new Geometry();

		const pillar = new Mesh(new BoxGeometry(5, height, 5));

		pillarsGeometry.merge(pillar.geometry, pillar.matrix);

		if (isClosed) {
			const anotherPillar = pillar.clone();
			anotherPillar.position.z += width
			anotherPillar.updateMatrix();
			pillarsGeometry.merge(anotherPillar.geometry, anotherPillar.matrix);
		};

		const bar = new Mesh(new BoxGeometry(2, 2, width));
		bar.position.set(0, (gridHeight / 2) - 10, (width / 2));
		bar.updateMatrix();

		pillarsGeometry.merge(bar.geometry, bar.matrix);

		const pillars = new Mesh(pillarsGeometry, materials.darkMetal);
		pillars.name = 'pillars';
		pillars.castShadow = true;
		pillars.receiveShadow = true;


		// helix
		const helixGeometry = new Geometry();

		for (let i = 0; i < (width / 2); i++) {

			helixGeometry.vertices.push(
				new Vector3(
					10 * Math.cos(i),
					10 * Math.sin(i),
					2 * i
				)
			);
		};

		const helix = new Line(helixGeometry, materials.line);
		helix.name = 'helix';

		helix.castShadow = true;
		helix.receiveShadow = true;
		helix.position.set(-5, 40, 0);


		// mesh
		const lineGeometry = new Geometry();
		const step = width / 5;

		for (let i = 0; i < width; i+=step) {

			const diff = width - i;

			lineGeometry.vertices.push( new Vector3(0, 0, i) );
			lineGeometry.vertices.push( new Vector3(0, diff * Math.tan(angle), width) );

		};

		for (let i = width; i > 0; i-=step) {
			
			const diff = width - i;

			lineGeometry.vertices.push( new Vector3(0, gridHeight, diff) );
			lineGeometry.vertices.push( new Vector3(0, gridHeight - diff * Math.tan(angle), 0) );

		};

		for (let i = 0; i < width; i+=step) {
			
			const diff = width - i;

			lineGeometry.vertices.push( new Vector3(0, 0, diff) );
			lineGeometry.vertices.push( new Vector3(0, diff * Math.tan(angle), 0) );

		};

		for (let i = 0; i < width; i+=step) {
			
			const diff = width - i;

			lineGeometry.vertices.push( new Vector3(0, gridHeight, i) );
			lineGeometry.vertices.push( new Vector3(0, gridHeight - (diff * Math.tan(angle)), width) );

		};

		const grid = new LineSegments(lineGeometry, materials.line);
		grid.position.y -= (height / 2);
		grid.castShadow = true;
		grid.receiveShadow = true;
		grid.name = 'grid';


		// final
		this.mesh.add(
			pillars,
			helix,
			grid
		);
	}
}