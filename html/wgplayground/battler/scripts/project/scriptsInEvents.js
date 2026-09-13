

const scriptsInEvents = {

	async Commones_Event17_Act1(runtime, localVars)
	{
		const isConfirmed = await runtime.GamePush.windows.showConfirm({
		    // Заголовок окна
		    title: 'Награда за вход',
		    // Описание окна
		    description: 'За участие в акции вы получаете 10 очков навыка',
		    // Текст кнопки подтверждения, по-умолчанию "Подтвердить"
		    textConfirm: 'Спасибо',
		    // Текст кнопки отмены, по-умолчанию "Отмена"
		    textCancel: 'Потом',
		    // Инвертировать цвета кнопок ("Подтвердить" будет серым), по-умолчанию "false"
		    invertButtonColors: false,
		});
		if (isConfirmed) {
		    runtime.callFunction("modal");
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
