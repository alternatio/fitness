import { StaticImageData } from 'next/image'

export type purposeT =
	| 'Жиросжигание'
	| 'Набор массы'
	| 'Увеличение силы'
	| 'Увеличение выносливости'

export type stageT = 0 | 1 | 2 | 3
export type genderT = 0 | 1

interface step {
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
	gender: string
}

export const arrayOfTextStage: string[] = [
	'Без стажа (0 лет)',
	'Небольшой стаж (от 1 года)',
	'Приличный стаж (от 3 лет)',
	'Значительный стаж (от 7 лет)',
]

export const data: programI[] = [
	{
		title: 'Программа тренировок с гантелями',
		description:
			'Для тех, у кого есть возможность заниматься только с гантелями',
		stage: 1,
		purpose: 'Набор массы',
		steps: [
			{
				title: 'Приседания с гантелями 3 подхода по 10 раз',
			},
		],
		image: 'img0.png',
		gender: 'мужской',
	},
	{
		title: 'Тренируйся как Раян Гослинг',
		description:
			'Тренировка по которой Раян Гослинг готовился к съемкам в фильме "Драйв"',
		stage: 1,
		purpose: 'Увеличение выносливости',
		steps: [
			{
				title:
					'Бег на беговой дорожке 30-50 минут на средней скорости.',
			},
			{
				title:
					'Занятие прессом. Качать пресс 20-30 раз по 3-4 подхода. Перерыв между подходами: 1-3 минуты.',
			},
			{
				title:
					'Махи гантелями вбок, качаем крылья спины. Брать гантели на свой выбор, желательно потяжелее. 10-12 раз, по 3-4 подхода. Перерыв между подходами: 1-3 минуты.',
			},
			{
				title:
					'Штанга. Накидываем блинов столько, чтобы в конце каждого подхода чувствовать жжение в груди. 10-12 раз, по 3-4 подхода. Перерыв: до полного восстановления. Такое упражнение лучше делать с тем, кто может подстраховать.',
			},
		],
		image: 'img1.png',
		gender: 'мужской',
	},
	{
		title: 'Кардио с элементами гимнастики',
		description:
			'Тренировка предназначена для интенсивного жиросжигания.',
		stage: 0,
		purpose: 'Жиросжигание',
		steps: [
			{
				title:
					'Бег на беговой дорожке 30-50 минут на средней скорости.',
			},
			{
				title: 'Подтягивания 3 подхода по 10 раз',
			},
		],
		image: 'img2.png',
		gender: 'мужской',
	},
	{
		title: 'Тренировка тяжеловеса',
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
		gender: 'мужской',
	},
	{
		title: 'Пампинг тренировка',
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
		gender: 'мужской',
	},
	{
		title: 'TRX продвинутый уровень',
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
		gender: 'мужской',
	},
	{
		title: 'Работа на всё тело со своим весом',
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
		gender: 'мужской',
	},
	{
		title: 'Crossfit',
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
		gender: 'мужской',
	},
	{
		title: 'Женская тренировка',
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
		gender: 'женский',
	},
]
