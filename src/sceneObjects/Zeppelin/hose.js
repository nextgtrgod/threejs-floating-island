import {
	Shape,
	CatmullRomCurve3,
	Mesh,
	ExtrudeGeometry } from 'three';


export default class Hose {
	constructor(radius, points, steps = 15) {

		this.radius = radius;
		
		const spline = new CatmullRomCurve3( points );
		
		const shape = new Shape();
		
		shape.moveTo(
			this.radius * Math.cos(0),
			this.radius * Math.sin(0)
		);

		for (let i = 1; i < 16; i++) {
			shape.lineTo(
				this.radius * Math.cos(i * (2 * Math.PI) / 16),
				this.radius * Math.sin(i * (2 * Math.PI) / 16)
			);
		};

		this.mesh = new Mesh(
			new ExtrudeGeometry(
				shape,
				{
					steps			: steps,
					bevelEnabled	: false,
					extrudePath		: spline
				}
			)
		);
		this.mesh.name = 'hose';
	}
}