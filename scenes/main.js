import { SceneManager, Scene, View, Camera, GameManager } from 'miaam';

import Player from '../entities/player.js';

class MainScene extends Scene {
	#player;

	#camera;

	onCreate() {
		this.preload = {
			assets: [
				{
					name: 'mainMap',
					url: './assets/tilemap/mainSceneMap.json',
					type: 'map',
				},
			],

			entities: [
				{
					name: 'player',
					type: Player,
					args: {},
				},
			],
		};
	}

	onStart() {
		super.onStart();
		const { mainMap } = this.getLoadedAssets().maps;
		this.setMap(mainMap);

		this.#player = this.getEntities().player;

		const world = new View(this);

		// setting the view of the scene
		this.setView(world);

		const gameScreen = GameManager.getInstance().getApp().screen;
		this.#camera = new Camera(this, gameScreen.width, gameScreen.height);
		this.#camera.centerOver(this.#player);

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
