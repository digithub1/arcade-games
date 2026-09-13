const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Plugins.Keyboard,
		C3.Behaviors.Timer,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Fade,
		C3.Plugins.TiledBg,
		C3.Plugins.WGSDK
	];
};
self.C3_JsPropNameTable = [
	{lane: 0},
	{Tween: 0},
	{Person: 0},
	{Background: 0},
	{Player: 0},
	{Food: 0},
	{Keyboard: 0},
	{Timer: 0},
	{TimerManager: 0},
	{Fade: 0},
	{TutorialText: 0},
	{ScoreText: 0},
	{GameOverText: 0},
	{Overlay: 0},
	{gameOverMask: 0},
	{PlayerPos: 0},
	{minX: 0},
	{FoodPos: 0},
	{maxX: 0},
	{PersonPos: 0},
	{WeeGooSDK: 0}
];

self.InstanceType = {
	Person: class extends self.ISpriteInstance {},
	Background: class extends self.ISpriteInstance {},
	Player: class extends self.ISpriteInstance {},
	Food: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	TimerManager: class extends self.ISpriteInstance {},
	TutorialText: class extends self.ISpriteFontInstance {},
	ScoreText: class extends self.ISpriteFontInstance {},
	GameOverText: class extends self.ISpriteFontInstance {},
	Overlay: class extends self.ISpriteInstance {},
	gameOverMask: class extends self.ITiledBackgroundInstance {},
	PlayerPos: class extends self.ISpriteInstance {},
	FoodPos: class extends self.ISpriteInstance {},
	PersonPos: class extends self.ISpriteInstance {},
	WeeGooSDK: class extends self.IInstance {}
}