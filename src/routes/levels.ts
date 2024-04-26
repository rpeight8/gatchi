interface Level {
	id: number;
	label: string;
	size: number;
	duration: number;
	pics: string[];
}

let nextId = 1;

const levels: Level[] = [
	{
		id: nextId++,
		label: 'Easy',
		size: 4,
		duration: 60 * 1000,
		pics: ['🍎', '🍌', '🍒', '🍇', '🍓', '🍑', '🍍', '🥝', '🥭']
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
