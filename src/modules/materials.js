import { colors } from './colors';

import { MeshPhongMaterial, DoubleSide } from 'three';


export const materials = {
	wood:		new MeshPhongMaterial({ color: colors.wood, flatShading: true }),
	green:		new MeshPhongMaterial({ color: colors.darkGreen, flatShading: true }),
	darkMetal:	new MeshPhongMaterial({ color: colors.darkMetal, flatShading: true }),
	lightMetal: new MeshPhongMaterial({ color: colors.lightMetal, flatShading: true, side: DoubleSide }),
	brick:		new MeshPhongMaterial({ color: colors.brick, flatShading: true, side: DoubleSide}),
	roof:		new MeshPhongMaterial({ color: colors.roof, flatShading: true }),
	white:		new MeshPhongMaterial({ color: colors.white, flatShading: true }),
	red:		new MeshPhongMaterial({ color: colors.red, flatShading: true })
}