import { Scene } from 'miaam';

const sceneLifeCycleEvents = {
	onCreate: () => {},

	onUpdate: () => {},

	onDestroy: () => {},
};

const mainScene = new Scene({
	name: 'main',
	assets: [
		{
			mainMap: 'mainSceneMap.json',
			type: 'map',
		},
		{
			playerSpriteAnimation: 'playerAnimation.json',
			type: 'animation',
		},
	],
	lifeCycleEvents: sceneLifeCycleEvents,
});

export default mainScene;
