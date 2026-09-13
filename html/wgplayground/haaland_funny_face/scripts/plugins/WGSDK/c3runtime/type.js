"use strict";

const C3 = globalThis.C3;

{
	C3.Plugins.WGSDK.Type = class SingleGlobalType extends globalThis.ISDKObjectTypeBase
	{
		constructor(objectClass)
		{
			super(objectClass);
		}
		
		Release()
		{
			super.Release();
		}
		
		OnCreate()
		{	
		}
	};
}