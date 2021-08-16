import { Entity, Keyboard, AnimatedSpriteWState } from 'miaam';

class Player extends Entity {
	#playerMovementVelocity = 1;

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
		const { playerSpriteAnimationSheet } = this.assets.animations;
		this.sprite = new AnimatedSpriteWState(playerSpriteAnimationSheet);
		this.#setupEventListeners();
	}

	onUpdate(delta) {
		super.onUpdate(delta);
		this.#playerMovement(delta);
	}

	onDestroy() {
		super.onDestroy();
	}

	#setupEventListeners() {
		this.#setupAnimationStateTransitions();
	}

	#playerMovement(delta) {
		const displacement = this.#playerMovementVelocity * delta;
		if (Keyboard.key('ArrowLeft').isDown) {
			this.transform = {
				x: this.transform.x - displacement,
			};
		} else if (Keyboard.key('ArrowRight').isDown) {
			this.transform = {
				x: this.transform.x + displacement,
			};
		} else if (Keyboard.key('ArrowUp').isDown) {
			this.transform = {
				y: this.transform.y - displacement,
			};
		} else if (Keyboard.key('ArrowDown').isDown) {
			this.transform = {
				y: this.transform.y + displacement,
			};
		}
	}

	#setupAnimationStateTransitions() {
		Keyboard.key('ArrowLeft').addActionOnDown({
			name: 'playerAnimationWalkingLeft',
			action: () => {
				this.sprite.state = 'walkingLeft';
			},
		});

		Keyboard.key('ArrowLeft').addActionOnUp({
			name: 'playerAnimationIdleLeft',
			action: () => {
				this.sprite.state = 'idleLeft';
			},
		});

		Keyboard.key('ArrowRight').addActionOnDown({
			name: 'playerAnimationWalkingRight',
			action: () => {
				this.sprite.state = 'walkingRight';
			},
		});

		Keyboard.key('ArrowRight').addActionOnUp({
			name: 'playerAnimationIdleRight',
			action: () => {
				this.sprite.state = 'idleRight';
			},
		});

		Keyboard.key('ArrowUp').addActionOnDown({
			name: 'playerAnimationWalkingUp',
			action: () => {
				this.sprite.state = 'walkingUp';
			},
		});

		Keyboard.key('ArrowUp').addActionOnUp({
			name: 'playerAnimationIdleUp',
			action: () => {
				this.sprite.state = 'idleUp';
			},
		});

		Keyboard.key('ArrowDown').addActionOnDown({
			name: 'playerAnimationWalkingDown',
			action: () => {
				this.sprite.state = 'walkingDown';
			},
		});

		Keyboard.key('ArrowDown').addActionOnUp({
			name: 'playerAnimationIdleDown',
			action: () => {
				this.sprite.state = 'idleDown';
			},
		});
	}
}

export default Player;
