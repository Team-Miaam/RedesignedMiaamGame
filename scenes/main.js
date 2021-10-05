import { SceneManager, Scene, View, Camera, GameManager, Keyboard, Dialogue } from 'miaam';

import Player from '../entities/player.js';
import Npc from '../entities/npc.js';
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
		this.addEntity({ layer: 'players', entity: this.#player });
		this.addEntity({ layer: 'players', entity: this.x });

		const gameScreen = GameManager.instance.app.screen;
		this.#camera = new Camera(this, gameScreen.width, gameScreen.height);
		this.#camera.centerOver(this.#player);

		// start the main scene
		const scenes = SceneManager.instance;
		scenes.startScene(MainScene.name);
		scenes.view = MainScene.name;

		// UI
		const nomanDialogue = ['helloooooooooooo', 'nice', 'goodbye'];
		this.dialogues = new Dialogue(nomanDialogue);
		this.initiateKeyboard();
	}

	initiateKeyboard() {
		Keyboard.key('a').addActionOnDown({
			name: 'nextText',
			action: () => {
				this.dialogues.nextText();
			},
		});
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
