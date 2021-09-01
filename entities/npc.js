import { Entity, Keyboard, Sprite } from 'miaam';

class Npc extends Entity {
	onCreate() {
		this.preload = {
			assets: [
				{
					name: 'npc_noman',
					url: './assets/images/Noman.png',
					type: 'image',
				},
			],
		};
	}

	onStart() {
		super.onStart();
		const { npc_noman } = this.assets.images;
		this.sprite = new Sprite(npc_noman.texture);
	}
}

export default Npc;
