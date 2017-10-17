import Lang from './Lang';


export default class Time {
	constructor() {

		this.now = new Date(0);
		this.lang = new Lang();

		this.timeNode = document.getElementById('time');
		this.dayNode = document.getElementById('day');

		this.update();
	}

	update = () => {
		if ((Date.now() - this.now) > 60000) {
			
			this.now = new Date();

			this.hours = ('0' + this.now.getHours()).slice(-2);
			this.minutes = ('0' + this.now.getMinutes()).slice(-2);
			
			this.date = this.now.getDate();
			this.month = this.lang.get('month', this.now.getMonth());
			this.day = this.lang.get('weekday', this.now.getDay());

			this.timeNode.innerHTML = `${this.hours}:${this.minutes}`;
			this.dayNode.innerHTML = `${this.date} ${this.month}, ${this.day}`;
		};
	};
};