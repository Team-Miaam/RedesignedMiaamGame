import { Entity, Keyboard } from 'miaam';

class Player extends Entity {
	assets = [
		{
			name: 'playerSpriteAnimationSheet',
			url: 'playerAnimationSheet.json',
			type: 'animation',
		},
	];

	playerMovementVelocity = 1;

	onCreate() {
		super.onCreate();
		this.setupEventListeners();
	}

	onUpdate() {
		super.onUpdate();
	}

	onDestroy() {
		super.onDestroy();
	}

	setupEventListeners() {
		Keyboard.addListenerOnPress({
			key: 'ArrowLeft',
			onAction: () => {
				this.transform.x += this.playerMovementVelocity;
				this.animation.setState('walkWest');
			},
		});

		// TODO: other movements
	}
}

export default Player;
