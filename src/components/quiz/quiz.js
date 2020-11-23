import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

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
        prevQuestion: PropTypes.func,
        selectAnswer: PropTypes.func,
        stepNumber: PropTypes.number,
        curId: PropTypes.string,
    };
    constructor(props) {
        super(props);
    }
    questionsList = () => {
        let typeEnding;

        switch (this.props.curId) {
            case "dress":
                typeEnding = "понравившееся платье";
            break;
            case "undershirt":
                typeEnding = "понравившуюяся майку";
            break;
            case "shorts":
                typeEnding = "понравившиеся шорты";
            break;
            case "skirt":
                typeEnding = "понравившуюся юбку";
            break;
            case "blouse":
                typeEnding = "понравившуюся кофту";
            break;
        }
        return [
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
                question: `Выберите ${typeEnding}`,
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
    };
    
    renderQuestion = (index) => {
        const DATA = this.questionsList();
        const renderAnswers = (question) => {
            return question.answers.map((elem) => {
                if (question.type == "radio") {
                    return (
                        <div className="form-radio__item" key={elem.id}>
                            <input className="form-radio__radio" name="item" type="radio" id={elem.id} value={elem.id} />
                            <label 
                                htmlFor={elem.id} 
                                className={question.className} 
                                onClick={() => this.props.selectAnswer(elem.id)}>
                                    {elem.value}
                            </label>
                        </div>
                    );
                } else if (question.type === "cards") {
                    return (<div key={elem.id}>
                        <div 
                            className={question.className} 
                            id={elem.id}
                            onClick={() => {this.props.finishQuiz(elem.id);}}>
                                {elem.value}
                        </div>
                    </div>);
                }
                
            });
        };


        let curQuestion = DATA[index];

        return (
            (<>
                <div className="quiz__title">{curQuestion.question}</div>
                    <div className="quiz__question">
                        <form className="quiz__radio form-radio">   
                            {renderAnswers(curQuestion)  }                                                  
                        </form>
                    </div>
                </>)
        );
    };
    renderInfo = (index, maxIndex) => {
        const progressPercent = Math.round(index / maxIndex * 100);
        const Statusbar = styled.div`
            &:after {
                width: ${progressPercent}%;
            }
            
        `;
        return (
            <div className="quiz__info">
                <div className="quiz__statusbar statusbar">
                <div className="statusbar__percent">Готово: {progressPercent}%</div>
                    <Statusbar className="statusbar__bar" ></Statusbar>
                </div>
                <div className="quiz__controls">
                    {index + 1 === maxIndex ? 
                        (<div className="button_outline quiz__button quiz__button_last" id="quiz__prev" onClick={this.props.prevQuestion}>
                            <img src={arrowPrevIcon} alt="" className="quiz__icon"/>&nbsp;
                            Назад
                        </div>) :
                        index === 0 ? 
                        (<div className="button_outline quiz__button quiz__button_disabled" id="quiz__prev">
                            <img src={arrowPrevIcon} alt="" className="quiz__icon"/>
                        </div>) :
                        (<div className="button_outline quiz__button" id="quiz__prev" onClick={this.props.prevQuestion}>
                            <img src={arrowPrevIcon} alt="" className="quiz__icon"/>
                        </div>)
                    }
                    {index + 1 !== maxIndex ? 
                        (<div className="button quiz__button" id="quiz__next" onClick={this.props.nextQuestion}>
                            Далее&nbsp;
                            <img src={arrowNextIcon} alt="" className="quiz__icon"/>
                        </div>) : 
                        ("")
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
