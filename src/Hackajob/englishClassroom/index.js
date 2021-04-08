const engToMorseObj= require('./constants');

function run(morseToEnglish, textToTranslate) {
	let obj = {};
	const convertMorseToEngObj = () => {
		for (i in engToMorseObj) {
			obj[engToMorseObj[i]] = i;
		}
		return obj;
	};
	let output = '';
	if (morseToEnglish) {
		const morseToEngObj = convertMorseToEngObj();
		const morseCodeArr = textToTranslate.split(' ');
		for (let i = 0; i <= morseCodeArr.length - 1; i++) {
			for (let k in morseToEngObj) {
				if (morseCodeArr[i] === k) {
					output += morseToEngObj[k].toLowerCase();
				}
			}
		}
	} else {
		const morseCodeArr = textToTranslate.split(' ').join('');
		for (let i = 0; i <= morseCodeArr.length - 1; i++) {
			for (let k in engToMorseObj) {
				if (morseCodeArr[i].toUpperCase() === k) {
					output += engToMorseObj[k] + ' ';
				}
			}
		}
	}
	return output;
}

console.log(run(false, 'The wizard quickly jinxed the gnomes before they vaporized'));
console.log(
	run(
		true,
		'- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-'
	)
);
