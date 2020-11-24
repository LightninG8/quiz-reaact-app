const questionsList = [
    {
        question: "Ваш пол",
        className: "form-radio__label form-radio__label_large",
        type: "radio",
        answers: [
            {
                id: "male",
                value: "Мужчина",
                image: null,
            },
            {
                id: "female",
                value: "Женщина",
                image: null,
            },
        ]
    },
    {
        question: "Ваш размер",
        className: "form-radio__label form-radio__label_radio",
        type: "radio",
        answers: [
            {
                id: "xs",
                value: "XS",
                image: null,
            },
            {
                id: "s",
                value: "S",
                image: null,
            },
            {
                id: "m",
                value: "M",
                image: null,
            },
            {
                id: "l",
                value: "L",
                image: null,
            },
            {
                id: "xl",
                value: "XL",
                image: null,
            },
        ]
    },
    {
        question: "Тип одежды:",
        className: "form-radio__label form-radio__label_medium",
        type: "radio",
        answers: [
            {
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
        ]
    },
    {
        question: [
            "Выберите понравившееся платье",
            "Выберите понравившуюяся майку",
            "Выберите понравившиеся шорты",
            "Выберите понравившуюся юбку",
            "Выберите понравившуюся кофту",
        ],
        className: "form-cards",
        type: "cards",
        answers: [
            {
                id: "1",
                value: "ПРИМЕРИТЬ 1",
                image: null,
            },
            {
                id: "2",
                value: "ПРИМЕРИТЬ 2",
                image: null,
            },
            {
                id: "3",
                value: "ПРИМЕРИТЬ 3",
                image: null,
            }
        ]
    }
];

export default questionsList;