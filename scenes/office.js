import { SceneManager, Scene, Camera, GameManager, Keyboard, Dialogue, PhysicsManager } from 'miaam';
import Box from '../entities/box.js';

import Player from '../entities/player.js';
import MainScene from './main.js';

class OfficeScene extends Scene {
	static preload = {
		assets: [
			{
				name: 'officeMap',
				url: './assets/tilemap/officeSceneMap.json',
				type: 'map',
			},
		],

		entities: [Player],
	};

	#player;

	#camera;

	onStart() {
		super.onStart();
		const { officeMap } = OfficeScene.assets.maps;

		this.map = officeMap;

		this.#player = new Box({ name: 'box', props: { x: 0, y: 0, width: 32, height: 32 } });
		// this.#player = new Player({ name: 'Ash' });
		this.addEntity({ layer: 'players', entity: this.#player });
		this.#player.transform = {
			x: 550,
			y: 600,
		};

		const gameScreen = GameManager.instance.app.screen;
		this.#camera = new Camera(this, gameScreen.width, gameScreen.height);
		this.#camera.centerOver(this.#player);

		// start the main scene
		const scenes = SceneManager.instance;
		scenes.view = OfficeScene.name;
		scenes.world = OfficeScene.name;
		PhysicsManager.instance.engine.gravity.y = 0;
		PhysicsManager.instance.events.addEventListener('customCustom', () => {
			scenes.stopScene();
			scenes.startScene(MainScene.name);
		});
	}

	onUpdate(ticker) {
		super.onUpdate(ticker);
		PhysicsManager.instance.update();
		this.#camera.follow(this.#player);
	}

	onDestroy() {
		super.onDestroy();
	}
}

export default OfficeScene;
