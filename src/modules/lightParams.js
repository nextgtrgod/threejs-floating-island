
export const lightParams = {

	sunrise: {
		hemisphereLight: {
			intensity: .6
		},
		ambientLight: {
			intensity: .3
		},
		sunLight: {
			intensity: .75,
			position: [630, 210, -110],
			color: 0xffba87
		}
	},

	midday: {

	},

	sunset: {
		hemisphereLight: {
			intensity: .6
		},
		ambientLight: {
			intensity: .3
		},
		sunLight: {
			intensity: .75,
			position: [-290, 560, 900],
			color: 0xffba87
		}
	},

	midnight: {
		hemisphereLight: {
			intensity: .025
		},
		ambientLight: {
			intensity: .025
		},
		sunLight: {
			intensity: .025,
			position: [-420, 800, 370],
			color: 0xeeeeee
		}
	}

}