
export default class Lang {
	constructor() {

		this.lang = navigator.language.substring(0, 2) || 'en';

		this.localData = {
			'en': {
				'weekday':  ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				'month': 	['january', 'february', 'march', 'aril', 'may', 'june', 'july', 'august	', 'september', 'october', 'november', 'december']
			},
			'ru': {
				'weekday': ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
				'month': 	['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
			}
		};
	}

	get = (type, index) => this.localData[this.lang][type][index];
}