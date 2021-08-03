import { Game } from 'miaam';

import mainScene from './scenes/main.js';
import labScene from './scenes/lab.js';

const game = new Game({
	width: 512,
	height: 512,
	antialias: true,
	transparent: false,
	resolution: 1,
});

game.addScenes(mainScene, labScene);
game.startScene('main');

document.body.appendChild(game.view);
