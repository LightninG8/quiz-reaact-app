// Изображения
// - Одежда
// -- Женщина
import womanDressImage from "../../../img/quiz/models/female/WomanDress1.png"; 
import womanShortsImage from "../../../img/quiz/models/female/WomanShort1.png"; 
import womanPantsImage from "../../../img/quiz/models/female/WomanShtani1.png"; 
import womanUndershirtImage from "../../../img/quiz/models/female/WomanTshirt1.png"; 
import womanSkirtImage from "../../../img/quiz/models/female/WomanSkirt1.png"; 

// -- Мужчина
import manPantsImage from "../../../img/quiz/models/male/ManShtani.png"; 
import manUndershirtImage from "../../../img/quiz/models/male/ManTShirt.png"; 

// -- Ребёнок
import kidPantsImage from "../../../img/quiz/models/kid/ChildShtani.png"; 
import kidShortsImage from "../../../img/quiz/models/kid/ChildShort.png"; 
import kidUndershirtImage from "../../../img/quiz/models/kid/ChildTShirt.png"; 


// - Люди
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
// - Женщина
import womanNormalShortsModel from "../../../models/female/shorts/WomenThinShort.glb";
import womanBodyShortsModel from "../../../models/female/shorts/WomenNormalShort.glb";
import womanHeavyShortsModel from "../../../models/female/shorts/WomenHeavyShort.glb";

import womanNormalSkirtModel from "../../../models/female/skirt/WomenThinSkirt.glb";
import womanBodySkirtModel from "../../../models/female/skirt/WomenNormalSkirt.glb";
import womanHeavySkirtModel from "../../../models/female/skirt/WomenHeavySkirt.glb";

import womanNormalDressModel from "../../../models/female/dress/WomenThinDress.glb";
import womanBodyDressModel from "../../../models/female/dress/WomenNormalDress.glb";
import womanHeavyDressModel from "../../../models/female/dress/WomenHeavyDress.glb";

import womanNormalUndershirtModel from "../../../models/female/undershirt/WomenThinTshirt.glb";
import womanBodyUndershirtModel from "../../../models/female/undershirt/WomenNormalTshirt.glb";
import womanHeavyUndershirtModel from "../../../models/female/undershirt/WomenHeavyTshirt.glb";

import womanNormalPantsModel from "../../../models/female/pants/WomenThinShtani.glb";
import womanBodyPantsModel from "../../../models/female/pants/WomenNormalShtani.glb";
import womanHeavyPantsModel from "../../../models/female/pants/WomenHeavyShtani.glb";

// - Мужчина
import manNormalUndershirtModel from "../../../models/male/undershirt/ManNormalTShirt.glb";
import manBodyUndershirtModel from "../../../models/male/undershirt/ManBodyTShirt.glb";
import manHeavyUndershirtModel from "../../../models/male/undershirt/ManHeavyTShirt.glb";

import manNormalPantsModel from "../../../models/male/pants/ManNormalShtani.glb";
import manBodyPantsModel from "../../../models/male/pants/ManBodyShtani.glb";
import manHeavyPantsModel from "../../../models/male/pants/ManHeavyShtani.glb";

// -Ребёнок
import kidNormalPantsModel from "../../../models/kid/pants/ChildThinShtani.glb";
import kidBodyPantsModel from "../../../models/kid/pants/ChildNormalShtani.glb";
import kidHeavyPantsModel from "../../../models/kid/pants/ChildHeavyShtani.glb";

import kidNormalShortsModel from "../../../models/kid/shorts/ChildThinShort.glb";
import kidBodyShortsModel from "../../../models/kid/shorts/ChildNormalShort.glb";
import kidHeavyShortsModel from "../../../models/kid/shorts/ChildHeavyShort.glb";

import kidNormalUndershirtModel from "../../../models/kid/undershirt/ChildThinTShirt.glb";
import kidBodyUndershirtModel from "../../../models/kid/undershirt/ChildNormalTShirt.glb";
import kidHeavyUndershirtModel from "../../../models/kid/undershirt/ChildHeavyTShirt.glb";


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
                            id: "pants",
                            value: "Штаны",
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
                                    image: manUndershirtImage,
                                    model: manNormalUndershirtModel,
                                },
                            ]
                        },
                        pants: {
                            question: "Выберите понравившиеся штаны",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                    id: "1",
                                    value: "ПРИМЕРИТЬ",
                                    image: manPantsImage,
                                    model: manNormalPantsModel,
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
                            id: "pants",
                            value: "Штаны",
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
                                image: manUndershirtImage,
                                model: manBodyUndershirtModel,
                                },
                            ]
                        },
                        pants: {
                            question: "Выберите понравившиеся штаны",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                id: "1",
                                value: "ПРИМЕРИТЬ",
                                image: manPantsImage,
                                model: manBodyPantsModel,
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
                            id: "pants",
                            value: "Штаны",
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
                                image: manUndershirtImage,
                                model: manHeavyUndershirtModel,
                                },
                            ]
                        },
                        pants: {
                            question: "Выберите понравившиеся штаны",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                id: "1",
                                value: "ПРИМЕРИТЬ",
                                image: manPantsImage,
                                model: manHeavyPantsModel,
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
                            id: "pants",
                            value: "Штаны",
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
                                    image: womanDressImage,
                                    model: womanNormalDressModel,
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
                                image: womanUndershirtImage,
                                model: womanNormalUndershirtModel,
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
                                image: womanShortsImage,
                                model: womanNormalShortsModel,
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
                                image: womanSkirtImage,
                                model: womanNormalSkirtModel,
                            },
                        ]
                        },
                        pants: {
                            question: "Выберите понравившеся штаны",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                id: "1",
                                value: "ПРИМЕРИТЬ",
                                image: womanPantsImage,
                                model: womanNormalPantsModel,
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
                            id: "pants",
                            value: "Штаны",
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
                                image: womanDressImage,
                                model: womanBodyDressModel,
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
                                image: womanUndershirtImage,
                                model: womanBodyUndershirtModel,
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
                                image: womanShortsImage,
                                model: womanBodyShortsModel,
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
                                image: womanSkirtImage,
                                model: womanBodySkirtModel,
                                },
                            ]
                        },
                        pants: {
                            question: "Выберите понравившееся штаны",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                id: "1",
                                value: "ПРИМЕРИТЬ",
                                image: womanPantsImage,
                                model: womanBodyPantsModel,
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
                            id: "pants",
                            value: "Штаны",
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
                                image: womanDressImage,
                                model: womanHeavyDressModel,
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
                                image: womanUndershirtImage,
                                model: womanHeavyUndershirtModel,
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
                                image: womanShortsImage,
                                model: womanHeavyShortsModel,
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
                                image: womanSkirtImage,
                                model: womanHeavySkirtModel,
                                },
                            ]
                        },
                        pants: {
                            question: "Выберите понравившееся штаны",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                id: "1",
                                value: "ПРИМЕРИТЬ",
                                image: womanPantsImage,
                                model: womanHeavyPantsModel,
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
                    answers: [
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
                            id: "pants",
                            value: "Штаны",
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
                                image: kidUndershirtImage,
                                model: kidNormalUndershirtModel,
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
                                image: kidShortsImage,
                                model: kidNormalShortsModel,
                                },
                            ]
                        },
                        pants: {
                            question: "Выберите понравившиеся штаны",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                id: "1",
                                value: "ПРИМЕРИТЬ",
                                image: kidPantsImage,
                                model: kidNormalPantsModel,
                                },
                            ]
                        },
                    }
                },
                "2k": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
                    type: "radio",
                    answers: [
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
                            id: "pants",
                            value: "Штаны",
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
                                image: kidUndershirtImage,
                                model: kidBodyUndershirtModel,
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
                                image: kidShortsImage,
                                model: kidBodyShortsModel,
                                },
                            ]
                        },
                        pants: {
                            question: "Выберите понравившиеся штаны",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                id: "1",
                                value: "ПРИМЕРИТЬ",
                                image: kidPantsImage,
                                model: kidBodyPantsModel,
                                },
                            ]
                        },
                    }
                },
                "3k": {
                    question: "Тип одежды:",
                    className: "form__label form__input_medium",
                    type: "radio",
                    answers: [
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
                            id: "pants",
                            value: "Штаны",
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
                                image: kidUndershirtImage,
                                model: kidHeavyUndershirtModel,
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
                                image: kidShortsImage,
                                model: kidHeavyShortsModel,
                                },
                            ]
                        },
                        pants: {
                            question: "Выберите понравившиеся штаны",
                            className: "form-cards",
                            type: "cards",
                            answers: [{
                                id: "1",
                                value: "ПРИМЕРИТЬ",
                                image: kidPantsImage,
                                model: kidHeavyPantsModel,
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