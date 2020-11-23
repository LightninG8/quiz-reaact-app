import React from "react";
import PropTypes from "prop-types";

import "./quiz.scss";

// Компоненты

// Изображения
import arrowNextIcon from "../../img/quiz/arrow-next.svg";
import arrowPrevIcon from "../../img/quiz/arrow-prev.svg";

class Quiz extends React.Component {
    static propTypes = {
        question: PropTypes.number,
        finishQuiz: PropTypes.func,
        nextQuestion: PropTypes.func,
        selectAnswer: PropTypes.func,
        answersResult: PropTypes.object,
    };
    constructor(props) {
        super(props);
    }
    questionsList = () => {
        return [
            {
                question: "Ваш пол",
                className: "form-radio__label_large",
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
                className: "form-radio__label_radio",
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
                className: "form-radio__label_medium",
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
            }
        ];
    };
    answersList = () => {
        return {
            male: {
                xs: {
                    dress: {
                        model: "Hello",
                    },
                    undershirt: {
                        model: "Hello",
                    },
                    shorts: {
                        model: "Hello",
                    },
                    skirt: {
                        model: "Hello",
                    },
                    blouse: {
                        model: "Hello",
                    }
                },
                s: {
                    dress: {
                        model: "Hello",
                    },
                    undershirt: {
                        model: "Hello",
                    },
                    shorts: {
                        model: "Hello",
                    },
                    skirt: {
                        model: "Hello",
                    },
                    blouse: {
                        model: "Hello",
                    }
                },
                m: {
                    dress: {
                        model: "Hello",
                    },
                    undershirt: {
                        model: "Hello",
                    },
                    shorts: {
                        model: "Hello",
                    },
                    skirt: {
                        model: "Hello",
                    },
                    blouse: {
                        model: "Hello",
                    }
                },
                l: {
                    dress: {
                        model: "Hello",
                    },
                    undershirt: {
                        model: "Hello",
                    },
                    shorts: {
                        model: "Hello",
                    },
                    skirt: {
                        model: "Hello",
                    },
                    blouse: {
                        model: "Hello",
                    }
                },
                xl: {
                    dress: {
                        model: "Hello",
                    },
                    undershirt: {
                        model: "Hello",
                    },
                    shorts: {
                        model: "Hello",
                    },
                    skirt: {
                        model: "Hello",
                    },
                    blouse: {
                        model: "Hello",
                    }
                }
            },
            female: {
                xs: {
                    dress: {
                        model: "Hello",
                    },
                    undershirt: {
                        model: "Hello",
                    },
                    shorts: {
                        model: "Hello",
                    },
                    skirt: {
                        model: "Hello",
                    },
                    blouse: {
                        model: "Hello",
                    }
                },
                s: {
                    dress: {
                        model: "Hello",
                    },
                    undershirt: {
                        model: "Hello",
                    },
                    shorts: {
                        model: "Hello",
                    },
                    skirt: {
                        model: "Hello",
                    },
                    blouse: {
                        model: "Hello",
                    }
                },
                m: {
                    dress: {
                        model: "Hello",
                    },
                    undershirt: {
                        model: "Hello",
                    },
                    shorts: {
                        model: "Hello",
                    },
                    skirt: {
                        model: "Hello",
                    },
                    blouse: {
                        model: "Hello",
                    }
                },
                l: {
                    dress: {
                        model: "Hello",
                    },
                    undershirt: {
                        model: "Hello",
                    },
                    shorts: {
                        model: "Hello",
                    },
                    skirt: {
                        model: "Hello",
                    },
                    blouse: {
                        model: "Hello",
                    }
                },
                xl: {
                    dress: {
                        model: "Hello",
                    },
                    undershirt: {
                        model: "Hello",
                    },
                    shorts: {
                        model: "Hello",
                    },
                    skirt: {
                        model: "Hello",
                    },
                    blouse: {
                        model: "Hello",
                    }
                }
            }
        };
    };
    renderQuestion = (index) => {
        const DATA = this.questionsList();
        const renderAnswers = (question) => {
            return question.answers.map((elem) => {
                return (
                    <div className="form-radio__item" key={elem.id}>
                        <input className="form-radio__radio" name="item" type="radio" id={elem.id} value={elem.id} />
                        <label 
                            htmlFor={elem.id} 
                            className={`form-radio__label ${question.className}`} 
                            onClick={() => {this.props.selectAnswer(elem.id);}}>
                                {elem.value}
                        </label>
                    </div>
                );
            });
        };


        let question = DATA[index];

        return (
            (<>
                <div className="quiz__title">{question.question}</div>
                    <div className="quiz__question">
                        <form className="quiz__radio form-radio">   
                            {renderAnswers(question)  }                                                  
                        </form>
                    </div>
                </>)
        );
    };
    renderInfo = (index, maxIndex) => {
        return (
            <div className="quiz__info">
                <div className="quiz__statusbar"></div>
                <div className="quiz__controls">
                    {index + 1 === maxIndex ? 
                        (<div className="button_outline quiz__button quiz__button_last" id="quiz__prev">
                            <img src={arrowPrevIcon} alt="" className="quiz__icon"/>
                        </div>) :
                        (<div className="button_outline quiz__button" id="quiz__prev">
                            <img src={arrowPrevIcon} alt="" className="quiz__icon"/>
                        </div>)
                    }
                    {index + 1 !== maxIndex ? 
                        (<div className="button quiz__button" id="quiz__next" onClick={this.props.nextQuestion}>
                            Далее&nbsp;
                            <img src={arrowNextIcon} alt="" className="quiz__icon"/>
                        </div>) : 
                        (<div className="button quiz__button" id="quiz__next" onClick={this.props.finishQuiz}>
                            Далее&nbsp;
                            <img src={arrowNextIcon} alt="" className="quiz__icon"/>
                        </div>)
                    }
                </div>
            </div>
        );
    };
    render() {
        return (
            <div className="quiz">
                {this.renderQuestion(this.props.question)}
                {this.renderInfo(this.props.question, this.questionsList().length)}
            </div>
        );
    }
    
}

export default Quiz;
