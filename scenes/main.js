import { SceneManager, Scene, View, Camera, GameManager } from 'miaam';

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

		this.#player = new Player({ name: 'Ash' });
		this.x = new Player({ name: 'Bruh' });
		this.addEntity(this.#player);
		this.addEntity(this.x);

		const world = new View(this);

		// setting the view of the scene
		this.view = world;

		const gameScreen = GameManager.instance.app.screen;
		this.#camera = new Camera(this, gameScreen.width, gameScreen.height);
		this.#camera.centerOver(this.#player);

		// start the main scene
		const scenes = SceneManager.instance;
		scenes.startScene(MainScene.name);
		scenes.view = MainScene.name;
	}

	onUpdate(ticker) {
		super.onUpdate(ticker);
		this.#camera.follow(this.#player);
	}

	onDestroy() {
		super.onDestroy();
	}
}

export default MainScene;
