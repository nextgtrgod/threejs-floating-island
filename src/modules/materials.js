import { colors } from './colors';

import {
	MeshPhongMaterial,
	DoubleSide,
	LineBasicMaterial } from 'three';


export const materials = {
	wood:		new MeshPhongMaterial({ color: colors.wood, flatShading: true }),
	green:		new MeshPhongMaterial({ color: colors.darkGreen, flatShading: true }),
	darkMetal:	new MeshPhongMaterial(
		{
			color: colors.darkMetal,
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

	glass: new MeshPhongMaterial(
		{
			color: colors.glass,
			side: DoubleSide,
			transparent: true,
			opacity: .5,
			specular: 0x050505,
			shininess: 10000
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
	
	balloon: 	new MeshPhongMaterial({ color: colors.balloon, flatShading: true, side: DoubleSide}),

	line:		new LineBasicMaterial({ color: colors.lightMetal, linewidth: 1}),

	water:	new MeshPhongMaterial(
		{
			color: colors.water,
			flatShading: true,
			specular: 0x050505,
			shininess: 1000,
			transparent: true,
			opacity: .8
		}
	),


	// for debug
	override:	new MeshPhongMaterial({ color: 0xdcb780, wireframe: true })
}