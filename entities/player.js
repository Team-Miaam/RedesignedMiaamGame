import { Entity, Keyboard, AnimatedSpriteWState } from 'miaam';

class Player extends Entity {
	#playerMovementVelocity = 1;

	static preload = {
		assets: [
			{
				name: 'playerSpriteAnimationSheet',
				url: './assets/animation/playerAnimation.json',
				type: 'animation',
			},
		],
	};

	onStart() {
		super.onStart();
		const { playerSpriteAnimationSheet } = Player.assets.animations;
		this.sprite = new AnimatedSpriteWState(playerSpriteAnimationSheet);
		this.setupEventListeners();
	}

	onUpdate(delta) {
		super.onUpdate(delta);
		this.playerMovement(delta);
	}

	onDestroy() {
		super.onDestroy();
	}

	setupEventListeners() {
		// FIXME: Manage the event system with event registry
		this.setupAnimationStateTransitions();
	}

	playerMovement(delta) {
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

	setupAnimationStateTransitions() {
		Keyboard.key('ArrowLeft').addActionOnDown({
			name: `${this.name}.playerAnimationWalkingLeft`,
			action: () => {
				this.sprite.state = 'walkingLeft';
			},
		});

		Keyboard.key('ArrowLeft').addActionOnUp({
			name: `${this.name}.playerAnimationIdleLeft`,
			action: () => {
				this.sprite.state = 'idleLeft';
			},
		});

		Keyboard.key('ArrowRight').addActionOnDown({
			name: `${this.name}.playerAnimationWalkingRight`,
			action: () => {
				this.sprite.state = 'walkingRight';
			},
		});

		Keyboard.key('ArrowRight').addActionOnUp({
			name: `${this.name}.playerAnimationIdleRight`,
			action: () => {
				this.sprite.state = 'idleRight';
			},
		});

		Keyboard.key('ArrowUp').addActionOnDown({
			name: `${this.name}.playerAnimationWalkingUp`,
			action: () => {
				this.sprite.state = 'walkingUp';
			},
		});

		Keyboard.key('ArrowUp').addActionOnUp({
			name: `${this.name}.playerAnimationIdleUp`,
			action: () => {
				this.sprite.state = 'idleUp';
			},
		});

		Keyboard.key('ArrowDown').addActionOnDown({
			name: `${this.name}.playerAnimationWalkingDown`,
			action: () => {
				this.sprite.state = 'walkingDown';
			},
		});

		Keyboard.key('ArrowDown').addActionOnUp({
			name: `${this.name}.playerAnimationIdleDown`,
			action: () => {
				this.sprite.state = 'idleDown';
			},
		});
	}
}

export default Player;
