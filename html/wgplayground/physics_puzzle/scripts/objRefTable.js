const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Physics,
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.WGSDK,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.WGSDK.Acts.InitReward,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.Sprite.Cnds.IsOverlappingOffset,
		C3.Plugins.System.Cnds.TriggerOnce
	];
};
self.C3_JsPropNameTable = [
	{Physics: 0},
	{Ground: 0},
	{Box1: 0},
	{Text: 0},
	{Pig: 0},
	{Touch: 0},
	{WeeGooSDK: 0}
];

self.InstanceType = {
	Ground: class extends self.ITiledBackgroundInstance {},
	Box1: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Pig: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	WeeGooSDK: class extends self.IInstance {}
}