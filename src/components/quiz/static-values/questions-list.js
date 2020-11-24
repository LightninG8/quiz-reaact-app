// Изображения
import dressImage from "../../../img/quiz/dress 1.png";

const questionsList = {
    question: "Ваш пол",
    className: "form__label form__label_large",
    type: "radio",
    answers: [{
            id: "male",
            value: "Мужчина",
            image: null,
        },
        {
            id: "female",
            value: "Женщина",
            image: null,
        },
        {
            id: "kid",
            value: "Ребёнок",
            image: null,
        },
    ],
    nextQuestion: {
        male: {
            question: "Выберите тип манекена",
            className: "form__label form__label_radio",
            type: "radio",
            answers: [{
                    id: "1m",
                    value: "1",
                    image: null,
                },
                {
                    id: "2m",
                    value: "2",
                    image: null,
                },
                {
                    id: "3m",
                    value: "3",
                    image: null,
                },
            ],
            nextQuestion: {
                "1m": {
                    question: "Тип одежды:",
                    className: "form__label form__label_medium",
                    type: "radio",
                    answers: [{
                            id: "undershirt",
                            value: "Майка",
                            image: null,
                        },
                        {
                            id: "shorts",
                            value: "Шорты",
                            image: null,
                        },
                    ],
                    nextQuestion: {
                        undershirt: {
                            question: "Выберите понравившуюяся майку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        shorts: {
                            question: "Выберите понравившиеся шорты",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        }
                    }
                },
                "2m": {
                    question: "Тип одежды:",
                    className: "form__label form__label_medium",
                    type: "radio",
                    answers: [{
                            id: "undershirt",
                            value: "Майка",
                            image: null,
                        },
                        {
                            id: "shorts",
                            value: "Шорты",
                            image: null,
                        },
                    ],
                    nextQuestion: {
                        undershirt: {
                            question: "Выберите понравившуюяся майку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        shorts: {
                            question: "Выберите понравившиеся шорты",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        }
                    }
                },
                "3m": {
                    question: "Тип одежды:",
                    className: "form__label form__label_medium",
                    type: "radio",
                    answers: [{
                            id: "undershirt",
                            value: "Майка",
                            image: null,
                        },
                        {
                            id: "shorts",
                            value: "Шорты",
                            image: null,
                        },
                    ],
                    nextQuestion: {
                        undershirt: {
                            question: "Выберите понравившуюяся майку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        shorts: {
                            question: "Выберите понравившиеся шорты",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        }
                    }
                },
            }
        },
        female: {
            question: "Выберите тип манекена",
            className: "form__label form__label_radio",
            type: "radio",
            answers: [{
                    id: "1f",
                    value: "1",
                    image: null,
                },
                {
                    id: "2f",
                    value: "2",
                    image: null,
                },
                {
                    id: "3f",
                    value: "3",
                    image: null,
                },
            ],
            nextQuestion: {
                "1f": {
                    question: "Тип одежды:",
                    className: "form__label form__label_medium",
                    type: "radio",
                    answers: [{
                            id: "dress",
                            value: "Платье",
                            image: null,
                        },
                        {
                            id: "undershirt",
                            value: "Майка",
                            image: null,
                        },
                        {
                            id: "shorts",
                            value: "Шорты",
                            image: null,
                        },
                        {
                            id: "skirt",
                            value: "Юбка",
                            image: null,
                        },
                        {
                            id: "blouse",
                            value: "Кофта",
                            image: null,
                        },
                    ],
                    nextQuestion: {
                        dress: {
                            question: "Выберите понравившееся платье",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        undershirt: {
                            question: "Выберите понравившуюяся майку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        shorts: {
                            question: "Выберите понравившиеся шорты",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        skirt: {
                            question: "Выберите понравившуюяся юбку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        blouse: {
                            question: "Выберите понравившуюяся кофту",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                    }
                },
                "2f": {
                    question: "Тип одежды:",
                    className: "form__label form__label_medium",
                    type: "radio",
                    answers: [{
                            id: "dress",
                            value: "Платье",
                            image: null,
                        },
                        {
                            id: "undershirt",
                            value: "Майка",
                            image: null,
                        },
                        {
                            id: "shorts",
                            value: "Шорты",
                            image: null,
                        },
                        {
                            id: "skirt",
                            value: "Юбка",
                            image: null,
                        },
                        {
                            id: "blouse",
                            value: "Кофта",
                            image: null,
                        },
                    ],
                    nextQuestion: {
                        dress: {
                            question: "Выберите понравившееся платье",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        undershirt: {
                            question: "Выберите понравившуюяся майку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        shorts: {
                            question: "Выберите понравившиеся шорты",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        skirt: {
                            question: "Выберите понравившуюяся юбку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        blouse: {
                            question: "Выберите понравившуюяся кофту",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                    }
                },
                "3f": {
                    question: "Тип одежды:",
                    className: "form__label form__label_medium",
                    type: "radio",
                    answers: [{
                            id: "dress",
                            value: "Платье",
                            image: null,
                        },
                        {
                            id: "undershirt",
                            value: "Майка",
                            image: null,
                        },
                        {
                            id: "shorts",
                            value: "Шорты",
                            image: null,
                        },
                        {
                            id: "skirt",
                            value: "Юбка",
                            image: null,
                        },
                        {
                            id: "blouse",
                            value: "Кофта",
                            image: null,
                        },
                    ],
                    nextQuestion: {
                        dress: {
                            question: "Выберите понравившееся платье",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        undershirt: {
                            question: "Выберите понравившуюяся майку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        shorts: {
                            question: "Выберите понравившиеся шорты",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        skirt: {
                            question: "Выберите понравившуюяся юбку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        blouse: {
                            question: "Выберите понравившуюяся кофту",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                    }
                },
            }
        },
        kid: {
            question: "Выберите тип манекена",
            className: "form__label form__label_radio",
            type: "radio",
            answers: [{
                    id: "1k",
                    value: "1",
                    image: null,
                },
                {
                    id: "2k",
                    value: "2",
                    image: null,
                },
                {
                    id: "3k",
                    value: "3",
                    image: null,
                },
            ],
            nextQuestion: {
                "1k": {
                    question: "Тип одежды:",
                    className: "form__label form__label_medium",
                    type: "radio",
                    answers: [{
                            id: "dress",
                            value: "Платье",
                            image: null,
                        },
                        {
                            id: "undershirt",
                            value: "Майка",
                            image: null,
                        },
                        {
                            id: "shorts",
                            value: "Шорты",
                            image: null,
                        },
                        {
                            id: "skirt",
                            value: "Юбка",
                            image: null,
                        },
                        {
                            id: "blouse",
                            value: "Кофта",
                            image: null,
                        },
                    ],
                    nextQuestion: {
                        dress: {
                            question: "Выберите понравившееся платье",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        undershirt: {
                            question: "Выберите понравившуюяся майку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        shorts: {
                            question: "Выберите понравившиеся шорты",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        skirt: {
                            question: "Выберите понравившуюяся юбку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        blouse: {
                            question: "Выберите понравившуюяся кофту",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                    }
                },
                "2k": {
                    question: "Тип одежды:",
                    className: "form__label form__label_medium",
                    type: "radio",
                    answers: [{
                            id: "dress",
                            value: "Платье",
                            image: null,
                        },
                        {
                            id: "undershirt",
                            value: "Майка",
                            image: null,
                        },
                        {
                            id: "shorts",
                            value: "Шорты",
                            image: null,
                        },
                        {
                            id: "skirt",
                            value: "Юбка",
                            image: null,
                        },
                        {
                            id: "blouse",
                            value: "Кофта",
                            image: null,
                        },
                    ],
                    nextQuestion: {
                        dress: {
                            question: "Выберите понравившееся платье",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        undershirt: {
                            question: "Выберите понравившуюяся майку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        shorts: {
                            question: "Выберите понравившиеся шорты",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        skirt: {
                            question: "Выберите понравившуюяся юбку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        blouse: {
                            question: "Выберите понравившуюяся кофту",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                    }
                },
                "3k": {
                    question: "Тип одежды:",
                    className: "form__label form__label_medium",
                    type: "radio",
                    answers: [{
                            id: "dress",
                            value: "Платье",
                            image: null,
                        },
                        {
                            id: "undershirt",
                            value: "Майка",
                            image: null,
                        },
                        {
                            id: "shorts",
                            value: "Шорты",
                            image: null,
                        },
                        {
                            id: "skirt",
                            value: "Юбка",
                            image: null,
                        },
                        {
                            id: "blouse",
                            value: "Кофта",
                            image: null,
                        },
                    ],
                    nextQuestion: {
                        dress: {
                            question: "Выберите понравившееся платье",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        undershirt: {
                            question: "Выберите понравившуюяся майку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        shorts: {
                            question: "Выберите понравившиеся шорты",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        skirt: {
                            question: "Выберите понравившуюяся юбку",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                        blouse: {
                            question: "Выберите понравившуюяся кофту",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "2",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                },
                                {
                                    id: "3",
                                    value: "ПРИМЕРИТЬ",
                                    image: dressImage,
                                    model: "MODEL",
                                }
                            ]
                        },
                    }
                },
            }
        },
    }
};

export default questionsList;