import { GameManager } from 'miaam';

import MainScene from './scenes/main.js';

const game = GameManager.getInstance();

game.createView({
	width: 512,
	height: 512,
	antialias: true,
	transparent: false,
	resolution: 1,
});

game.startScene(MainScene);

document.body.appendChild(game.view);
