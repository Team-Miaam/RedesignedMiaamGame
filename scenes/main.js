import { GameManager, Scene, Entity, View, Camera, Keyboard } from 'miaam';

class MainScene extends Scene {
	assets = [
		{
			name: 'mainMap',
			url: 'mainSceneMap.json',
			type: 'map',
		},
		{
			name: 'playerSpriteAnimationSheet',
			url: 'playerAnimationSheet.json',
			type: 'animation',
		},
	];

	#world;

	#player;

	#camera;

	onCreate() {
		this.#world = new View(this.resources.mainMap);

		this.#player = new Entity({
			name: '#player',
			animationSheet: this.resources.playerSpriteAnimationSheet,
		});
		this.setupPlayerMovement();

		this.#camera = new Camera(this.#world);
		this.#camera.centerOver(this.#player);

		this.setupEventListeners();

		// setting up view and entities of the scene
		this.view = this.#world;
		this.entities.push(this.#player);
	}

	onUpdate(ticker) {
		this.#camera.follow(this.#player);
	}

	onDestroy() {}

	setupPlayerMovement() {
		const playerVelocity = 1;
		Keyboard.addListenerOnPress({
			key: 'ArrowLeft',
			onAction: () => {
				this.#player.transform.x += playerVelocity;
				this.#player.animation.setState('walkWest');
			},
		});

		// TODO: other movements
	}

	setupEventListeners() {
		this.eventListeners.push({
			name: 'onLabEntry',
			onAction: () => {
				// switch scene
				// GameManager.getInstance().startScene(LabScene, data)
			},
		});
	}
}

export default MainScene;
