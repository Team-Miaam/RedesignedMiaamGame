import { GameManager, SceneManager } from 'miaam';

import MainScene from './scenes/main.js';

const game = GameManager.instance;
const scenes = SceneManager.instance;

game.createWindow({
	width: 512,
	height: 512,
	antialias: true,
	backgroundAlpha: false,
	resolution: 1,
});

MainScene.Load();
MainScene.loader.onComplete.add(() => {
	scenes.addScene(new MainScene());
});

document.body.appendChild(game.window);
