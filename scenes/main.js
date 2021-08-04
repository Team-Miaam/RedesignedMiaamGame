import { Scene, View, Camera } from 'miaam';

import Player from '../entities/player.js';

class MainScene extends Scene {
	assets = [
		{
			name: 'mainMap',
			url: 'mainSceneMap.json',
			type: 'map',
		},
	];

	#world;

	#player;

	#camera;

	onCreate() {
		super.onCreate();
		this.#world = new View(this.resources.mainMap);

		this.#player = new Player();
		// adding entities to the scene
		this.addEntity(this.#player);

		this.#camera = new Camera(this.#world);
		this.#camera.centerOver(this.#player);

		this.setupEventListeners();

		// setting the view of the scene
		this.setView(this.#world);
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
