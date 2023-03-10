export type purposeT =
	| 'Жиросжигание'
	| 'Набор массы'
	| 'Увеличение силы'
	| 'Увеличение выносливости'

export type stageT = 0 | 1 | 2 | 3

export interface programI {
	title: string
	stage: stageT
	purpose: purposeT
	description: string
	steps: string[]
	image: string
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
		steps: ['Приседания с гантелями 3 подхода по 10 раз'],
		image: 'img0.png',
	},
	{
		title: 'Тренируйся как Раян Гослинг',
		description:
			'Тренировка по которой Раян Гослинг готовился к съемкам в фильме "Драйв"',
		stage: 1,
		purpose: 'Увеличение выносливости',
		steps: [
			'Бег на беговой дорожке 30-50 минут на средней скорости.',
		],
		image: 'img1.png',
	},
	{
		title: 'Кардио с элементами гимнастики',
		description:
			'Тренировка предназначена для интенсивного жиросжигания.',
		stage: 0,
		purpose: 'Жиросжигание',
		steps: [
			'Бег на беговой дорожке 1-2 часа на низкой скорости, примерно, 7 км/ч.',
			'Разминка с резиной',
		],
		image: 'img2.png',
	},
	{
		title: 'Тренировка тяжеловеса',
		description: 'Тренировка предназначена для сильных.',
		stage: 3,
		purpose: 'Увеличение силы',
		steps: [
			'Разминка с резиной',
			'Разогрев с малыми весами',
		],
		image: 'img3.png',
	},
	{
		title: 'Пампинг тренировка',
		description: 'Пампинг тренировка - метод для прокачки медленных волокон.',
		stage: 2,
		purpose: 'Увеличение силы',
		steps: [
			'Общая разминка, выполнять не менее 5 минут.',
			'Сведение рук в кроссовере, 15-20 повторений по 4 подхода.',
		],
		image: 'img4.png',
	},
	{
		title: 'TRX продвинутый уровень',
		description: 'Высокоинтенсивная тренировка для тех, кто уже изучил основы работы с петлями TRX.',
		stage: 3,
		purpose: 'Жиросжигание',
		steps: [
			'Общая разминка, выполнять не менее 5 минут.',
			'Приседания с петлями, 20 повторений по 4 подхода',
		],
		image: 'img5.png',
	},
	{
		title: 'Работа на всё тело со своим весом',
		description: 'Программа для тех, кто хочет иметь красивую, эстетичную форму.',
		stage: 2,
		purpose: 'Увеличение выносливости',
		steps: [
			'Общая разминка, выполнять не менее 5 минут.',
			'Подъем ног в висе, до отказа, 3 подхода.',
		],
		image: 'img6.png',
	},
	{
		title: 'Crossfit',
		description: 'Программа рассчитана как для новичков.',
		stage: 1,
		purpose: 'Увеличение выносливости',
		steps: [
			'Общая разминка, выполнять не менее 5 минут.',
			'Отжимания от пола, 15 повторений, 4 подхода..',
		],
		image: 'img7.png',
	},
]
