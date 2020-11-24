import React from "react";
// import PropTypes from "prop-types";
import styled from 'styled-components';

import "./quiz.scss";

// Компоненты
// import answersList from "./static-values/answers-list";
import questionsList from "./static-values/questions-list";
import AnswerItem from "../answer-item";

// Изображения
import arrowNextIcon from "../../img/quiz/arrow-next.svg";
import arrowPrevIcon from "../../img/quiz/arrow-prev.svg";

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isStart: false,
            isFinish: false,
            curId: "",
            questionNumber: 0,
            result: [],
        };
    }
    renderQuestion = (i) => {
        const renderAnswers = () => {
            const answers = questionsList[i].answers.map( elem => {
                const {id, value, image} = elem;

                return (
                    <AnswerItem 
                        key={id} 
                        answerId={id} 
                        answerValue={value} 
                        onClickHandler={this.selectAnswer}
                        onFinishQuiz={this.finishQuiz}
                        type={questionsList[i].type}
                        answerImage={image}
                        className={questionsList[i].className}></AnswerItem>
                );
            });

            return answers;
        };
        const renderInfo = (index, length) => {
            const progressPercent = Math.round(index / length * 100);
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
                        {index + 1 === length ? 
                            (<div className="button_outline quiz__button quiz__button_last" id="quiz__prev" onClick={this.prevQuestion}>
                                <img src={arrowPrevIcon} alt="" className="quiz__icon"/>&nbsp;
                                Назад
                            </div>) :
                            index === 0 ? 
                            (<div className="button_outline quiz__button quiz__button_disabled" id="quiz__prev">
                                <img src={arrowPrevIcon} alt="" className="quiz__icon"/>
                            </div>) :
                            (<div className="button_outline quiz__button" id="quiz__prev" onClick={this.prevQuestion}>
                                <img src={arrowPrevIcon} alt="" className="quiz__icon"/>
                            </div>)
                        }
                        {index + 1 !== length ? 
                            (<div className="button quiz__button" id="quiz__next" onClick={this.nextQuestion}>
                                Далее&nbsp;
                                <img src={arrowNextIcon} alt="" className="quiz__icon"/>
                            </div>) : 
                            ("")
                        }
                    </div>
                </div>
        );
        };
        return (
            <>
                <div className="quiz__title">
                    {   
                        questionsList[i].type === "cards" ?
                        questionsList[i].question[this.state.result[this.state.result.length - 1]]:
                        questionsList[i].question
                    }</div>
                <div className="quiz__question">
                    <form className="quiz__radio form">   
                        { renderAnswers(questionsList[i]) }                                                  
                    </form>
                </div>
                { renderInfo(this.state.questionNumber, questionsList.length) }
                </>
        );
    };
    startQuiz = () => {
        this.setState( () => ({
            isStart: true,
            isFinish: false,
        }));
    };
    finishQuiz = (id) => {
        this.setState( () => ({
            isStart: false,
            isFinish: true,
            curId: "",
            questionNumber: 0,
            result: [],
        }));

        this.modalWindow(id);
    };
    // modalWindow  = (id) => {
    //     let modal;

    //     for (let i = 0; i < this.state.result.length; i++) {
    //         modal = i === 0 ? answersList[this.state.result[i]] : modal[this.state.result[i]];
    //     }
    //     modal = modal[id];

    //     alert(`${modal.model} \n ${this.state.result.join(" ")}`);
    // };
    nextQuestion = () => {
        if (this.state.curId) {
            this.setState( state => ({
                questionNumber: state.questionNumber + 1,
                curId: "",
                result: state.result.concat([state.curId]),
            }));
        }
        
    };
    prevQuestion = () => {
        let newResult = this.state.result.slice(0);
        newResult.pop();

        this.setState( state => ({
            questionNumber: state.questionNumber - 1,
            curId: "",
            result: newResult,
        }));
    };
    selectAnswer = (id) => {
        this.setState( () => ({
            curId: id,
        }));
    };

    render() {
        return (
            <div className="questions__area">
                <div className="quiz">
                    {
                        this.state.isStart || !this.state.isFinish ?
                            (this.renderQuestion(this.state.questionNumber)) :
                            (<div className="questions__button" onClick={() => this.startQuiz()}></div>)
                    }
                    
                </div>
            </div>
            
        );
    }
    
}

export default Quiz;
