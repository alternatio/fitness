interface programI {
  title: string
  stage: number
  description: string
  steps: string[]
}

export const data: programI[] = [
  {
    title: 'Программа тренировок с гантелями',
    description: 'Для тех, у кого есть возможность заниматься только с гантелями',
    stage: 2,
    steps: [
      'Разминка: 5 минут',
      'Приседания с гантелями: 10/3, гантели: 50кг.'
    ]
  },
  {
    title: 'Тренируйся как Раян Гослинг',
    description: 'Тренировка по которой Раян Гослинг готовился к съемкам в фильме "Драйв"',
    stage: 1,
    steps: [
      'Разминка: 5 минут',
      'Бег на беговой дорожке: 30-50 минут.'
    ]
  }
]