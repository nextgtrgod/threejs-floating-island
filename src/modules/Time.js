
export default class Time {
	constructor() {
		this.now = new Date(0)

		this.timeNode = document.getElementById('time')
		this.dayNode = document.getElementById('day')

		this.update()
	}

	update = () => {
		if ((Date.now() - this.now) > 60000) {
			
			this.now = new Date()

			this.hours = ('0' + this.now.getHours()).slice(-2)
		}
	}

	getHours = () => this.hours
}