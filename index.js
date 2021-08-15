import { GameManager, SceneManager } from 'miaam';

import MainScene from './scenes/main.js';

const game = GameManager.getInstance();
const scenes = SceneManager.getInstance();

game.createWindow({
	width: 512,
	height: 512,
	antialias: true,
	backgroundAlpha: false,
	resolution: 1,
});

scenes.addScene(MainScene);

document.body.appendChild(game.getWindow());
