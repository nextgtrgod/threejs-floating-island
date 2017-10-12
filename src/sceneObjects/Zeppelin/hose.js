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
				this.radius * Math.cos(16 * (2 * Math.PI) / i),
				this.radius * Math.sin(16 * (2 * Math.PI) / i)
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
	}
}