import { Entity, Keyboard, AnimatedSpriteWState } from 'miaam';

class Player extends Entity {
	playerMovementVelocity = 1;

	onCreate() {
		this.preload = {
			assets: [
				{
					name: 'playerSpriteAnimationSheet',
					url: './assets/animation/playerAnimation.json',
					type: 'animation',
				},
			],
		};
	}

	onStart() {
		super.onStart();
		const { playerSpriteAnimationSheet } = this.getLoadedAssets().animations;
		// this.setupEventListeners();
		this.setSprite(new AnimatedSpriteWState(playerSpriteAnimationSheet));
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
