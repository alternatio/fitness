import { StaticImageData } from 'next/image'

export type purposeT =
	| 'Жиросжигание'
	| 'Набор массы'
	| 'Увеличение силы'
	| 'Увеличение выносливости'

export type stageT = 0 | 1 | 2 | 3
export type genderT = 0 | 1

export interface step {
	title: string
	src?: string
}

export interface programI {
	title: string
	stage: stageT
	purpose: purposeT
	description: string
	steps: step[]
	image: string
	calories: number
	gender: string
}

export const arrayOfTextStage: string[] = [
	'Без стажа (0 лет)',
	'Небольшой стаж (от 1 года)',
	'Приличный стаж (от 3 лет)',
	'Значительный стаж (от 7 лет)',
]

export const arrayOfTextGender: string[] = [
	'мужской',
	'женский',
]

export const data: programI[] = [
	{
		title: 'Диета для похудения',
		description:
			'Для тех, кто хочет похудеть',
		stage: 1,
		purpose: 'Жиросжигание',
		steps: [
			{
				title: 'Кушать гречку утром, днем и вечером.',
			},
			{
				title: 'Кушать суп вилкой, агрессивно.',
			},
		],
		image: 'img0.png',
		calories: 500,
		gender: 'мужской',
	},
	{
		title: 'Диета Раяна Гослинга',
		description:
			'Тренировка по которой Раян Гослинг готовился к съемкам в фильме "Драйв"',
		stage: 1,
		purpose: 'Увеличение выносливости',
		steps: [
			{
				title: 'Подтягивания 3 подхода по 10 раз',
			},
			{
				title: 'Приседания со штангой 3 подхода по 10 раз',
			},
		],
		image: 'img1.png',
		calories: 2500,
		gender: 'мужской',
	},
	{
		title: 'Диета для кардио с элементами гимнастики',
		description:
			'Тренировка предназначена для интенсивного жиросжигания.',
		stage: 0,
		purpose: 'Жиросжигание',
		steps: [
			{
				title: 'Подтягивания 3 подхода по 10 раз',
			},
			{
				title: 'Приседания со штангой 3 подхода по 10 раз',
			},
		],
		image: 'img2.png',
		calories: 2400,
		gender: 'мужской',
	},
	{
		title: 'Диета тяжеловеса',
		description: 'Тренировка предназначена для сильных.',
		stage: 3,
		purpose: 'Увеличение силы',
		steps: [
			{
				title: 'Подтягивания 3 подхода по 10 раз',
			},
			{
				title: 'Приседания со штангой 3 подхода по 10 раз',
			},
		],
		image: 'img3.png',
		calories: 15000,
		gender: 'мужской',
	},
	{
		title: 'Диета для пампинг тренировки',
		description:
			'Пампинг тренировка - метод для прокачки медленных волокон.',
		stage: 2,
		purpose: 'Увеличение силы',
		steps: [
			{
				title: 'Подтягивания 3 подхода по 10 раз',
			},
			{
				title: 'Приседания со штангой 3 подхода по 10 раз',
			},
		],
		image: 'img4.png',
		calories: 3000,
		gender: 'мужской',
	},
	{
		title: 'TRX-диета',
		description:
			'Высокоинтенсивная тренировка для тех, кто уже изучил основы работы с петлями TRX.',
		stage: 3,
		purpose: 'Жиросжигание',
		steps: [
			{
				title: 'Подтягивания 3 подхода по 10 раз',
			},
			{
				title: 'Приседания со штангой 3 подхода по 10 раз',
			},
		],
		image: 'img5.png',
		calories: 250,
		gender: 'мужской',
	},
	{
		title: 'Базовая диета',
		description:
			'Программа для тех, кто хочет иметь красивую, эстетичную форму.',
		stage: 2,
		purpose: 'Увеличение выносливости',
		steps: [
			{
				title: 'Подтягивания 3 подхода по 10 раз',
			},
			{
				title: 'Приседания со штангой 3 подхода по 10 раз',
			},
		],
		image: 'img6.png',
		calories: 1500,
		gender: 'мужской',
	},
	{
		title: 'Crossfit-диета',
		description: 'Программа рассчитана как для новичков.',
		stage: 1,
		purpose: 'Увеличение выносливости',
		steps: [
			{
				title: 'Подтягивания 3 подхода по 10 раз',
			},
			{
				title: 'Приседания со штангой 3 подхода по 10 раз',
			},
		],
		image: 'img7.png',
		calories: 2000,
		gender: 'женский',
	},
	{
		title: 'Диета Никиты',
		description: 'Диета, которой придерживается Никита.',
		stage: 3,
		purpose: 'Увеличение выносливости',
		steps: [
			{
				title: 'На утро миска мюсли с грецкими орехами. И в конце бананчик  для разгона.',
			},
			{
				title: 'Днем по настроению, но желательно больше калорий.',
			},
			{
				title: 'Ближе к вечеру творог и на выбор фрукты. Есои есть настроение, то можно бахнуть куриную грудку.',
			},
		],
		image: 'img8.png',
		calories: 1800,
		gender: 'мужской',
	},
]
