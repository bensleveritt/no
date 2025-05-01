// place files you want to import through the `$lib` alias in this folder.

import reasons from "./reasons.json";

export function getRandomReason() {
	const idx = Math.floor(Math.random() * reasons.length);
	return reasons[idx];
}
