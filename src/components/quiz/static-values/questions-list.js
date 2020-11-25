// Изображения
import dressImage from "../../../img/quiz/dress 1.png";
import manNormalImage from "../../../img/quiz/man-normal.png";
import manBodyImage from "../../../img/quiz/man-body.png";
import manHeavyImage from "../../../img/quiz/man-heavy.png";
import womanNormalImage from "../../../img/quiz/woman-thin.png";
import womanBodyImage from "../../../img/quiz/woman-normal.png";
import womanHeavyImage from "../../../img/quiz/woman-heavy.png";
import kidNormalImage from "../../../img/quiz/child-thin.png";
import kidBodyImage from "../../../img/quiz/child-normal.png";
import kidHeavyImage from "../../../img/quiz/child-heavy.png";

// Модели
import manNormalModel from "../../../models/MenNormal.glb";
import manBodyModel from "../../../models/MenBody.glb";
import manHeavyModel from "../../../models/MenHeavy.glb";
import womanNormalModel from "../../../models/WomenThin.glb";
import womanBodyModel from "../../../models/WomenNormal.glb";
import womanHeavyModel from "../../../models/WomenHeavy.glb";
import kidNormalModel from "../../../models/ChildThin.glb";
import kidBodyModel from "../../../models/ChildNormal.glb";
import kidHeavyModel from "../../../models/ChildHeavy.glb";

// Список вопросов представляет из себя все возможные варианты (дерево)
// по результатам выбранного ответа (сравнивается по id) осуществляется переход к
// следующему "nextQuestion" и так до конца.

const questionsList = {
    question: "Выберите один вариант ответа:",
    className: "form__label form__input_large",
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
            className: "form__label form__input_radio",
            type: "radio",
            answers: [{
                    id: "1m",
                    value: "1",
                    image: manNormalImage,
                },
                {
                    id: "2m",
                    value: "2",
                    image: manBodyImage,
                },
                {
                    id: "3m",
                    value: "3",
                    image: manHeavyImage,
                },
            ],
            nextQuestion: {
                "1m": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
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
                                    model: manNormalModel,
                                },
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

                            ]
                        }
                    }
                },
                "2m": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
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
                                model: manBodyModel,
                                },
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
                                model: manBodyModel,
                                },
                            ]
                        }
                    }
                },
                "3m": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
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
                                model: manHeavyModel,
                                },
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
                                model: manHeavyModel,
                                },
                            ]
                        }
                    }
                },
            }
        },
        female: {
            question: "Выберите тип манекена:",
            className: "form__label form__input_radio",
            type: "radio",
            answers: [{
                    id: "1f",
                    value: "1",
                    image: womanNormalImage,
                },
                {
                    id: "2f",
                    value: "2",
                    image: womanBodyImage,
                },
                {
                    id: "3f",
                    value: "3",
                    image: womanHeavyImage,
                },
            ],
            nextQuestion: {
                "1f": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
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
                                    model: womanNormalModel,
                                },
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
                                model: womanNormalModel,
                            },
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
                                model: womanNormalModel,
                            },
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
                                model: womanNormalModel,
                            },
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
                                model: womanNormalModel,
                                },
                            ]
                        },
                    }
                },
                "2f": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
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
                                model: womanBodyModel,
                                },
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
                                model: womanBodyModel,
                                },
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
                                model: womanBodyModel,
                                },
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
                                model: womanBodyModel,
                                },
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
                                model: womanBodyModel,
                                },
                            ]
                        },
                    }
                },
                "3f": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
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
                                model: womanHeavyModel,
                                },
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
                                model: womanHeavyModel,
                                },
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
                                model: womanHeavyModel,
                                },
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
                                model: womanHeavyModel,
                                },
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
                                model: womanHeavyModel,
                                },
                            ]
                        },
                    }
                },
            }
        },
        kid: {
            question: "Выберите тип манекена",
            className: "form__label form__input_radio",
            type: "radio",
            answers: [{
                    id: "1k",
                    value: "1",
                    image: kidNormalImage,
                },
                {
                    id: "2k",
                    value: "2",
                    image: kidBodyImage,
                },
                {
                    id: "3k",
                    value: "3",
                    image: kidHeavyImage,
                },
            ],
            nextQuestion: {
                "1k": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
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
                                model: kidNormalModel,
                                },
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
                                model: kidNormalModel,
                                },
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
                                model: kidNormalModel,
                                },
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
                                model: kidNormalModel,
                                },
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
                                model: kidNormalModel,
                                },
                            ]
                        },
                    }
                },
                "2k": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
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
                                model: kidBodyModel,
                                },
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
                                model: kidBodyModel,
                                },
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
                                model: kidBodyModel,
                                },
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
                                model: kidBodyModel,
                                },
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
                                model: kidBodyModel,
                                },
                            ]
                        },
                    }
                },
                "3k": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
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
                                model: kidHeavyModel,
                                },
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
                                model: kidHeavyModel,
                                },
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
                                model: kidHeavyModel,
                                },
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
                                model: kidHeavyModel,
                                },
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
                                model: kidHeavyModel,
                                },
                            ]
                        },
                    }
                },
            }
        },
    }
};

export default questionsList;