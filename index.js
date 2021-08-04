import { Game } from 'miaam';

import MainScene from './scenes/main.js';

const game = Game.getInstance();

game.createWindow({
	width: 512,
	height: 512,
	antialias: true,
	transparent: false,
	resolution: 1,
});

game.startScene(MainScene);

document.body.appendChild(game.window);
