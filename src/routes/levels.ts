interface Level {
	id: number;
	label: string;
	size: number;
	duration: number;
	pics: string[];
}

// import billyBike from '../assets/images/Billy-bike.webp?enhanced';
// import raySmile from '../assets/images/Ray-smile.webp?enhanced';
// import steveSmile from '../assets/images/Steve-smile.webp?enhanced';
// import steveSmile2 from '../assets/images/Steve-smile-2.webp?enhanced';
// import steveWink from '../assets/images/Steve-wink.webp?enhanced';
// import vanLeather from '../assets/images/Van-leather.webp?enhanced';
// import ricardoSmile from '../assets/images/Ricardo-smile.webp?enhanced';
// import dannyRespect from '../assets/images/Danny-respect.webp?enhanced';

import billySmile from '../assets/images/Billy-smile.webp';
import raySmile from '../assets/images/Ray-smile.webp';
import steveSmile from '../assets/images/Steve-smile.webp';
import steveSmile2 from '../assets/images/Steve-smile-2.webp';
import steveWink from '../assets/images/Steve-wink.webp';
import vanLeather from '../assets/images/Van-leather.webp';
import ricardoSmile from '../assets/images/Ricardo-smile.webp';
import dannyRespect from '../assets/images/Danny-respect.webp';

let nextId = 1;

const levels: Level[] = [
	{
		id: nextId++,
		label: 'Easy',
		size: 4,
		duration: 60 * 1000,
		pics: [
			billySmile,
			raySmile,
			steveSmile,
			steveSmile2,
			steveWink,
			vanLeather,
			ricardoSmile,
			dannyRespect
		]
	},
	{
		id: nextId++,
		label: 'Medium',
		size: 6,
		duration: 90 * 1000,
		pics: ['🍔', '🍕', '🍟', '🥪', '🌭', '🍦', '🍩', '🍪', '🍫', '🍭']
	},
	{
		id: nextId++,
		label: 'Hard',
		size: 8,
		duration: 120 * 1000,
		pics: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜']
	}
];

export type { Level };
export { levels };
