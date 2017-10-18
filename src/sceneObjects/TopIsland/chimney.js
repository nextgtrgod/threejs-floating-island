import {
	Shape,
	CatmullRomCurve3,
	Vector3,
	Mesh,
	CylinderGeometry,
	ExtrudeGeometry } from 'three';


export default class Chimney {
	constructor(width, height, radius = 5, steps = 8) {

		this.radius = radius;

		const spline = new CatmullRomCurve3([
			new Vector3(0, 0, 0),
			new Vector3(0, 0, width),
			new Vector3(0, height, width + radius),
		]
		);
		
		const pipeShape = new Shape();
		
		pipeShape.moveTo(
			this.radius * Math.cos(0),
			this.radius * Math.sin(0)
		);

		for (let i = 1; i < 16; i++) {
			pipeShape.lineTo(
				this.radius * Math.cos(i * (2 * Math.PI) / 16),
				this.radius * Math.sin(i * (2 * Math.PI) / 16)
			);
		};

		this.mesh = new Mesh(
			new ExtrudeGeometry(
				pipeShape,
				{
					steps			: steps,
					bevelEnabled	: false,
					extrudePath		: spline
				}
			),
		);
	}
}