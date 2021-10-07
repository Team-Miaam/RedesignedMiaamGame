import { SceneManager, Scene, Camera, GameManager, Keyboard, Dialogue, PhysicsManager } from 'miaam';
import Box from '../entities/box.js';

import Player from '../entities/player.js';

class MainScene extends Scene {
	static preload = {
		assets: [
			{
				name: 'mainMap',
				url: './assets/tilemap/mainSceneMap.json',
				type: 'map',
			},
		],

		entities: [Player],
	};

	#player;

	#camera;

	onStart() {
		super.onStart();
		const { mainMap } = MainScene.assets.maps;
		this.map = mainMap;

		// this.#player = new Box({ name: 'box', props: { x: 900, y: 410, width: 32, height: 32 } });
		this.#player = new Player({ name: 'Ash' });
		this.addEntity({ layer: 'players', entity: this.#player });
		this.#player.transform = {
			x: 1024,
			y: 416,
		};

		const gameScreen = GameManager.instance.app.screen;
		this.#camera = new Camera(this, gameScreen.width, gameScreen.height);
		this.#camera.centerOver(this.#player);

		// start the main scene
		const scenes = SceneManager.instance;
		scenes.startScene(MainScene.name);
		scenes.view = MainScene.name;
		scenes.world = MainScene.name;
		PhysicsManager.instance.engine.gravity.y = 0;
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

export default MainScene;
