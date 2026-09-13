


const scriptsInEvents = {

	async Menucode_Event400_Act1(runtime, localVars)
	{
		const bots = runtime.objects["курица_TinyRanch_Animals"].getAllInstances(); // Получаем всех куриц
		
		for (const bot of bots) {
		    if (bot.instVars.PrevX === 0) {
		        bot.instVars.PrevX = bot.x; // Если это первый тик, инициализируем PrevX
		    }
		
		    const prevX = bot.instVars.PrevX; // Предыдущее значение X
		    const currentX = bot.x; // Текущее значение X
		
		    if (currentX > prevX) {
		        bot.width = Math.abs(bot.width); // Двигается вправо -> нормальное положение
		    } else if (currentX < prevX) {
		        bot.width = -Math.abs(bot.width); // Двигается влево -> зеркалим
		    }
		
		    bot.instVars.PrevX = currentX; // Обновляем PrevX
		}
		
	},

	async Menucode_Event401_Act1(runtime, localVars)
	{
		const cows = runtime.objects["корова_TinyRanch_Animals"].getAllInstances(); // Получаем всех коров
		
		for (const cow of cows) {
		    if (cow.instVars.PrevX === 0) {
		        cow.instVars.PrevX = cow.x; // Если это первый тик, инициализируем PrevX
		    }
		
		    const prevX = cow.instVars.PrevX; // Предыдущее значение X
		    const currentX = cow.x; // Текущее значение X
		
		    if (currentX > prevX) {
		        cow.width = Math.abs(cow.width); // Двигается вправо -> нормальное положение
		    } else if (currentX < prevX) {
		        cow.width = -Math.abs(cow.width); // Двигается влево -> зеркалим
		    }
		
		    cow.instVars.PrevX = currentX; // Обновляем PrevX
		}
		
	},

	async Menucode_Event402_Act1(runtime, localVars)
	{
		const chicks = runtime.objects["цыпленок_TinyRanch_Animals"].getAllInstances(); // Получаем всех цыплят
		
		for (const chick of chicks) {
		    if (chick.instVars.PrevX === 0) {
		        chick.instVars.PrevX = chick.x; // Если это первый тик, инициализируем PrevX
		    }
		
		    const prevX = chick.instVars.PrevX; // Предыдущее значение X
		    const currentX = chick.x; // Текущее значение X
		
		    if (currentX > prevX) {
		        chick.width = Math.abs(chick.width); // Двигается вправо -> нормальное положение
		    } else if (currentX < prevX) {
		        chick.width = -Math.abs(chick.width); // Двигается влево -> зеркалим
		    }
		
		    chick.instVars.PrevX = currentX; // Обновляем PrevX
		}
	},

	async Menucode_Event403_Act1(runtime, localVars)
	{
		const dogs = runtime.objects["собака_TinyRanch_Animals"].getAllInstances(); // Получаем всех собак
		
		for (const dog of dogs) {
		    if (dog.instVars.PrevX === 0) {
		        dog.instVars.PrevX = dog.x; // Если это первый тик, инициализируем PrevX
		    }
		
		    const prevX = dog.instVars.PrevX; // Предыдущее значение X
		    const currentX = dog.x; // Текущее значение X
		
		    if (currentX > prevX) {
		        dog.width = Math.abs(dog.width); // Двигается вправо -> нормальное положение
		    } else if (currentX < prevX) {
		        dog.width = -Math.abs(dog.width); // Двигается влево -> зеркалим
		    }
		
		    dog.instVars.PrevX = currentX; // Обновляем PrevX
		}
		
	},

	async Menucode_Event404_Act1(runtime, localVars)
	{
		const cats = runtime.objects["кот_TinyRanch_Animals"].getAllInstances(); // Получаем всех котов
		
		for (const cat of cats) {
		    if (cat.instVars.PrevX === 0) {
		        cat.instVars.PrevX = cat.x; // Если это первый тик, инициализируем PrevX
		    }
		
		    const prevX = cat.instVars.PrevX; // Предыдущее значение X
		    const currentX = cat.x; // Текущее значение X
		
		    if (currentX > prevX) {
		        cat.width = Math.abs(cat.width); // Двигается вправо -> нормальное положение
		    } else if (currentX < prevX) {
		        cat.width = -Math.abs(cat.width); // Двигается влево -> зеркалим
		    }
		
		    cat.instVars.PrevX = currentX; // Обновляем PrevX
		}
		
	},

	async Menucode_Event405_Act1(runtime, localVars)
	{
		const goldenDogs = runtime.objects["золотаясобака_TinyRanch_Animals"].getAllInstances(); // Получаем всех золотых собак
		
		for (const dog of goldenDogs) {
		    if (dog.instVars.PrevX === 0) {
		        dog.instVars.PrevX = dog.x; // Если это первый тик, инициализируем PrevX
		    }
		
		    const prevX = dog.instVars.PrevX; // Предыдущее значение X
		    const currentX = dog.x; // Текущее значение X
		
		    if (currentX > prevX) {
		        dog.width = Math.abs(dog.width); // Двигается вправо -> нормальное положение
		    } else if (currentX < prevX) {
		        dog.width = -Math.abs(dog.width); // Двигается влево -> зеркалим
		    }
		
		    dog.instVars.PrevX = currentX; // Обновляем PrevX
		}
		
	},

	async Menucode_Event406_Act1(runtime, localVars)
	{
		const goldenCats = runtime.objects["золотойкот_TinyRanch_Animals"].getAllInstances(); // Получаем всех золотых котов
		
		for (const cat of goldenCats) {
		    if (cat.instVars.PrevX === 0) {
		        cat.instVars.PrevX = cat.x; // Если это первый тик, инициализируем PrevX
		    }
		
		    const prevX = cat.instVars.PrevX; // Предыдущее значение X
		    const currentX = cat.x; // Текущее значение X
		
		    if (currentX > prevX) {
		        cat.width = Math.abs(cat.width); // Двигается вправо -> нормальное положение
		    } else if (currentX < prevX) {
		        cat.width = -Math.abs(cat.width); // Двигается влево -> зеркалим
		    }
		
		    cat.instVars.PrevX = currentX; // Обновляем PrevX
		}
		
	},

	async Menucode_Event407_Act1(runtime, localVars)
	{
		const boys = runtime.objects["пацанчик"].getAllInstances(); // Получаем всех пацанов
		
		for (const boy of boys) {
		    if (boy.instVars.PrevX === 0) {
		        boy.instVars.PrevX = boy.x; // Если это первый тик, инициализируем PrevX
		    }
		
		    const prevX = boy.instVars.PrevX; // Предыдущее значение X
		    const currentX = boy.x; // Текущее значение X
		
		    if (currentX > prevX) {
		        boy.width = Math.abs(boy.width); // Двигается вправо -> нормальное положение
		    } else if (currentX < prevX) {
		        boy.width = -Math.abs(boy.width); // Двигается влево -> зеркалим
		    }
		
		    boy.instVars.PrevX = currentX; // Обновляем PrevX
		}
		
	},

	async Menucode_Event408_Act1(runtime, localVars)
	{
		const geese = runtime.objects["Гусь"].getAllInstances(); // Получаем всех гусей
		
		for (const goose of geese) {
		    if (goose.instVars.PrevX === 0) {
		        goose.instVars.PrevX = goose.x; // Инициализация PrevX, если это первый тик
		    }
		
		    const prevX = goose.instVars.PrevX; // Предыдущее значение X
		    const currentX = goose.x; // Текущее значение X
		
		    if (currentX > prevX) {
		        goose.width = Math.abs(goose.width); // Двигается вправо -> нормальное положение
		    } else if (currentX < prevX) {
		        goose.width = -Math.abs(goose.width); // Двигается влево -> зеркалим
		    }
		
		    goose.instVars.PrevX = currentX; // Обновляем PrevX для следующего тика
		}
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

