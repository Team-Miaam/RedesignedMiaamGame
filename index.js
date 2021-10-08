import { GameManager, SceneManager } from 'miaam';

import MainScene from './scenes/main.js';
import OfficeScene from './scenes/office.js';

const game = GameManager.instance;
const scenes = SceneManager.instance;

game.createWindow({
	width: 512,
	height: 512,
	antialias: true,
	backgroundAlpha: false,
	resolution: 1,
});

scenes.addScene(MainScene);
scenes.addScene(OfficeScene);
scenes.startScene(MainScene.name);

document.body.appendChild(game.window);
