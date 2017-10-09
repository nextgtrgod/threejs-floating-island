import { colors } from './colors';

import { MeshPhongMaterial, DoubleSide, LineBasicMaterial } from 'three';


export const materials = {
	wood:		new MeshPhongMaterial({ color: colors.wood, flatShading: true }),
	green:		new MeshPhongMaterial({ color: colors.darkGreen, flatShading: true }),
	darkMetal:	new MeshPhongMaterial(
		{
			color: colors.darkMetal,
			// flatShading: true
			specular: 0x050505,
			shininess: 100
		}
	),

	lightMetal: new MeshPhongMaterial(
		{
			color: colors.lightMetal,
			side: DoubleSide,
			specular: 0x050505,
			shininess: 100
		}
	),

	rust: new MeshPhongMaterial(
		{
			color: colors.rust,
			side: DoubleSide,
			specular: 0x050505,
			shininess: 100
		}
	),

	brick:		new MeshPhongMaterial({ color: colors.brick, flatShading: true, side: DoubleSide}),
	roof:		new MeshPhongMaterial({ color: colors.roof, flatShading: true }),
	white:		new MeshPhongMaterial({ color: colors.white, flatShading: true }),
	red:		new MeshPhongMaterial({ color: colors.red, flatShading: true }),

	line:		new LineBasicMaterial({ color: colors.lightMetal, linewidth: 1})
}