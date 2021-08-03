import { Scene } from 'miaam';

const sceneLifeCycleEvents = {
	onCreate: () => {},

	onUpdate: () => {},

	onDestroy: () => {},
};

const labScene = new Scene({
	name: 'main',
	assets: [
		{
			labMap: 'mainSceneMap.json',
			type: 'map',
		},
		{
			playerSpriteAnimation: 'playerAnimation.json',
			type: 'animation',
		},
	],
	lifeCycleEvents: sceneLifeCycleEvents,
});

export default labScene;
