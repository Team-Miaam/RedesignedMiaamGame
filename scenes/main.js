import { SceneManager, Scene, View, Camera, GameManager, Keyboard, Dialogue, BitmapText } from 'miaam';

import Player from '../entities/player.js';
import Npc from '../entities/npc.js';
class MainScene extends Scene {
	#player;
	dialogues;
	#camera;

	onCreate() {
		this.preload = {
			assets: [
				{
					name: 'minecraft',
					url: './assets/fonts/mine.xml',
					type: 'font',
				},

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
				{
					name: 'npc_noman',
					type: Npc,
					args: {},
				},
			],
		};
	}

	onStart() {
		super.onStart();
		const { minecraft } = this.assets.fonts;
		console.log(minecraft);
		const { mainMap } = this.assets.maps;
		this.map = mainMap;

		this.#player = this.entities.player;

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
		let nomanDialogue = ['hello', 'nice', 'goodbye'];
		this.dialogues = new Dialogue(nomanDialogue, 'Minecraft');
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
