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
import steveMmm from '../assets/images/Steve-mmm.webp';
import steveHmm from '../assets/images/Steve-hmm.webp';
import bradRayAmazed from '../assets/images/Brad-ray-amazed.webp';
import billyWink from '../assets/images/Billy-wink.webp';
import billySmoking from '../assets/images/Billy-smoking.webp';
import billySmoking2 from '../assets/images/Billy-smoking-2.webp';
import billySmoking3 from '../assets/images/Billy-smoking-3.webp';
import bradAmazed from '../assets/images/Brad-amazed.webp';
import wrestle from '../assets/images/Wrestle.webp';
import wrestle2 from '../assets/images/Wrestle-2.webp';
import billyAhStart from '../assets/images/Billy-ah-start.webp';
import billyAhEnd from '../assets/images/Billy-ah-end.webp';
import billyBike from '../assets/images/Billy-bike.webp';
import billyClosedEyes from '../assets/images/Billy-closed-eyes.webp';
import billyOpenedEyes from '../assets/images/Billy-opened-eyes.webp';
import billyRipping from '../assets/images/Billy-ripping.webp';
import billyFlex from '../assets/images/Billy-flex.webp';
import billySmirk from '../assets/images/Billy-smirk.webp';
import billyStaring from '../assets/images/Billy-staring.webp';
import bradStaring from '../assets/images/Brad-staring.webp';
import rayAmazed from '../assets/images/Ray-amazed.webp';
import steveGun from '../assets/images/Steve-gun.webp';
import wrestle3 from '../assets/images/Wrestle-3.webp';
import vanGun from '../assets/images/Van-gun.webp';

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
			dannyRespect,
			steveMmm,
			steveHmm,
			bradRayAmazed,
			billyWink,
			billySmoking,
			billySmoking2,
			billySmoking3,
			bradAmazed,
			wrestle,
			wrestle2,
			billyAhStart,
			billyAhEnd,
			billyBike,
			billyClosedEyes,
			billyOpenedEyes,
			billyRipping,
			billyFlex,
			billySmirk,
			billyStaring,
			bradStaring,
			rayAmazed,
			steveGun,
			wrestle3,
			vanGun,
		],
	},
	{
		id: nextId++,
		label: 'Medium',
		size: 6,
		duration: 61 * 1000,
		pics: [
			billySmile,
			raySmile,
			steveSmile,
			steveSmile2,
			steveWink,
			vanLeather,
			ricardoSmile,
			dannyRespect,
			steveMmm,
			steveHmm,
			bradRayAmazed,
			billyWink,
			billySmoking,
			billySmoking2,
			billySmoking3,
			bradAmazed,
			wrestle,
			wrestle2,
			billyAhStart,
			billyAhEnd,
			billyBike,
			billyClosedEyes,
			billyOpenedEyes,
			billyRipping,
			billyFlex,
			billySmirk,
			billyStaring,
			bradStaring,
			rayAmazed,
			steveGun,
			wrestle3,
			vanGun,
		],
	},
	{
		id: nextId++,
		label: 'Hard',
		size: 8,
		duration: 120 * 1000,
		pics: [
			billySmile,
			raySmile,
			steveSmile,
			steveSmile2,
			steveWink,
			vanLeather,
			ricardoSmile,
			dannyRespect,
			steveMmm,
			steveHmm,
			bradRayAmazed,
			billyWink,
			billySmoking,
			billySmoking2,
			billySmoking3,
			bradAmazed,
			wrestle,
			wrestle2,
			billyAhStart,
			billyAhEnd,
			billyBike,
			billyClosedEyes,
			billyOpenedEyes,
			billyRipping,
			billyFlex,
			billySmirk,
			billyStaring,
			bradStaring,
			rayAmazed,
			steveGun,
			wrestle3,
			vanGun,
		],
	},
];

export type { Level };
export { levels };
