import { Scene, View, Camera } from 'miaam';

import Player from '../entities/player.js';

class MainScene extends Scene {
	#world;

	#player;

	#camera;

	onAwake() {
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
		console.log(mainMap);
		this.#world = new View(mainMap);

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
