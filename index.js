import { GameManager, SceneManager } from 'miaam';

import MainScene from './scenes/main.js';

const game = GameManager.getInstance();
const scenes = SceneManager.getInstance();

game.createWindow({
	width: 512,
	height: 512,
	antialias: true,
	transparent: false,
	resolution: 1,
});

scenes.addScene(MainScene);
scenes.startScene(MainScene.name);
scenes.setMainView(MainScene.name);

document.body.appendChild(game.window);
