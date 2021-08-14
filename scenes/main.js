import { SceneManager, Scene, View, Camera } from 'miaam';

import Player from '../entities/player.js';

class MainScene extends Scene {
	#world;

	#player;

	#camera;

	onCreate() {
		this.assets = [
			{
				name: 'mainMap',
				url: './assets/tilemap/mainSceneMap.json',
				type: 'map',
			},
		];
	}

	onStart() {
		super.onStart();
		const { mainMap } = this.getLoadedAssets().maps;
		this.setMap(mainMap);

		// this.#player = new Player();
		// adding entities to the scene
		// this.addEntity(this.#player);

		this.#world = new View(this);
		// this.#camera = new Camera(this.#world);
		// this.#camera.centerOver(this.#player);

		// this.setupEventListeners();

		// setting the view of the scene
		this.setView(this.#world);

		// start the main scene
		const scenes = SceneManager.getInstance();
		scenes.startScene(MainScene.name);
		scenes.setMainView(MainScene.name);
	}

	onUpdate(ticker) {
		super.onUpdate();
		this.#camera.follow(this.#player);
	}

	onDestroy() {
		super.onDestroy();
	}

	setupEventListeners() {
		this.addEventListener({
			name: 'onLabEntry',
			onAction: (event) => {
				// switch scene
			},
		});
	}
}

export default MainScene;
