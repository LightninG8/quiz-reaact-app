import React from "react";
import PropTypes from "prop-types";

import "./quiz.scss";

// Компоненты

// Изображения
import arrowNextIcon from "../../img/quiz/arrow-next.svg";
import arrowPrevIcon from "../../img/quiz/arrow-prev.svg";

class Quiz extends React.Component {
    static propTypes = {
        number: PropTypes.number,
        nextQuestion: PropTypes.func,
    };
    constructor(props) {
        super(props);
    }
    getQuestion = (i) => {
        let questionsList = [
            {
                title: "Ваш пол:",
                type: "gender",
                values: [
                    {
                        output: "Мужчина",
                        input: "male",
                    },
                    {
                        output: "Женщина",
                        input: "female",
                    }
                ],
                className: "form-radio__label_large"
            },
            {
                title: "Ваш размер:",
                type: "size",
                values: [
                    {
                        output: "XS",
                        input: "xs",
                    },
                    {
                        output: "S",
                        input: "s",
                    },
                    {
                        output: "M",
                        input: "m",
                    },
                    {
                        output: "L",
                        input: "l",
                    },
                    {
                        output: "XL",
                        input: "xl",
                    },
                ],
                className: "form-radio__label_radio"
            },
            {
                title: "Тип одежды:",
                type: "type",
                values: [
                    {
                        output: "Платье",
                        input: "dress",
                    },
                    {
                        output: "Майка",
                        input: "undershirt",
                    },
                    {
                        output: "Шорты",
                        input: "shorts",
                    },
                    {
                        output: "Юбка",
                        input: "skirt",
                    },
                    {
                        output: "Кофта",
                        input: "blouse",
                    },
                ],
                className: "form-radio__label_medium"
            },
        ];
        
        return questionsList[i];
    };
    getAnswer = () => {
        return {
            male: {
                xs: {
                    dress: {
                        model: 1
                    },
                    undershirt: {
                        model: 2
                    },
                    shorts: {
                        model: 3
                    },
                    skirt: {
                        model: 4
                    },
                    blouse: {
                        model: 5
                    }, 
                },
                s: {
                    dress: {
                        model: 6
                    },
                    undershirt: {
                        model: 7
                    },
                    shorts: {
                        model: 8
                    },
                    skirt: {
                        model: 9
                    },
                    blouse: {
                        model: 10
                    }, 
                },
                m: {
                    dress: {
                        model: 11
                    },
                    undershirt: {
                        model: 12
                    },
                    shorts: {
                        model: 13
                    },
                    skirt: {
                        model: 14
                    },
                    blouse: {
                        model: 15
                    }, 
                },
                l: {
                    dress: {
                        model: 16
                    },
                    undershirt: {
                        model: 17
                    },
                    shorts: {
                        model: 18
                    },
                    skirt: {
                        model: 19
                    },
                    blouse: {
                        model: 20
                    }, 
                },
                xl: {
                    dress: {
                        model: 21
                    },
                    undershirt: {
                        model: 22
                    },
                    shorts: {
                        model: 23
                    },
                    skirt: {
                        model: 24
                    },
                    blouse: {
                        model: 52
                    },
                },
            },
            female: {
                xs: {
                    dress: {
                        model: 26
                    },
                    undershirt: {
                        model: 27
                    },
                    shorts: {
                        model: 28
                    },
                    skirt: {
                        model: 29
                    },
                    blouse: {
                        model: 30
                    },
                },
                s: {
                    dress: {
                        model: 31
                    },
                    undershirt: {
                        model: 32
                    },
                    shorts: {
                        model: 33
                    },
                    skirt: {
                        model: 34
                    },
                    blouse: {
                        model: 35
                    }, 
                },
                m: {
                    dress: {
                        model: 36
                    },
                    undershirt: {
                        model: 37
                    },
                    shorts: {
                        model: 38
                    },
                    skirt: {
                        model: 39
                    },
                    blouse: {
                        model: 40
                    }, 
                },
                l: {
                    dress: {
                        model: 41
                    },
                    undershirt: {
                        model: 42
                    },
                    shorts: {
                        model: 43
                    },
                    skirt: {
                        model: 44
                    },
                    blouse: {
                        model: 45
                    },
                },
                xl: {
                    dress: {
                        model: 46
                    },
                    undershirt: {
                        model: 47
                    },
                    shorts: {
                        model: 48
                    },
                    skirt: {
                        model: 49
                    },
                    blouse: {
                        model: 50
                    }, 
                },
            }
        };
    };
    render() {
        const question = this.getQuestion(this.props.number);
        let questionAnswers;

        if (question != null) {
            questionAnswers = question.values.map( (elem) => {
                let {output, input} = elem;
                let classNames = `form-radio__label ${question.className}`;
    
                return (
                    <div className="form-radio__item" key={input}>
                        <input className="form-radio__radio" name="item" type="radio" id={input} value={input} />
                        <label htmlFor={input} className={classNames}>{output}</label>
                    </div>
                );
            });
        } else {
            alert("It's all");
        }
        
        
        return (
            <div className="quiz">
                <div className="quiz__title">{question.title}</div>
                <div className="quiz__question">
                    <form className="quiz__radio form-radio">
                        {questionAnswers}  
                    </form>
                    
                </div>
                <div className="quiz__info">
                    <div className="quiz__statusbar"></div>
                    <div className="quiz__controls">
                        <div className="button_outline quiz__button" id="quiz__prev">
                            <img src={arrowPrevIcon} alt="" className="quiz__icon"/>
                        </div>
                        <div className="button quiz__button" id="quiz__next" onClick={this.props.nextQuestion}>
                            Далее&nbsp;
                            <img src={arrowNextIcon} alt="" className="quiz__icon"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Quiz;
