import React from "react";
// import PropTypes from "prop-types";
import styled from 'styled-components';

import "./quiz.scss";

// Компоненты
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
            isModalClose: true,
            curId: "",
            question: questionsList,
            questionNumber: 0,
            result: [],
        };
    }
    renderQuestion = (question) => {
        const renderAnswers = () => {
            const answers = question.answers.map( elem => {
                const {id, value, image} = elem;

                return (
                    <AnswerItem 
                        key={id} 
                        answerId={id} 
                        answerValue={value} 
                        onClickHandler={this.selectAnswer}
                        onFinishQuiz={this.finishQuiz}
                        type={question.type}
                        answerImage={image}
                        className={question.className}></AnswerItem>
                );
            });

            return answers;
        };
        const renderInfo = (index, length) => {
            const progressPercent = Math.round(index / length * 100);
            const Statusbar = styled.div`
                &:after {
                    width: ${progressPercent}%;
                    transition: 0.2s;
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
                <div className="quiz__title">{this.state.question.question}</div>
                <div className="quiz__question">
                    <form className="quiz__radio form">   
                        { renderAnswers(this.state.question) }                                                  
                    </form>
                </div>
                { renderInfo(this.state.questionNumber, 4) }
                </>
        );
    };
    startQuiz = () => {
        this.setState( () => ({
            isStart: true,
            isFinish: false,
            questionNumber: 0,
        }));
    };
    finishQuiz = (id) => {
        this.setState( (state) => ({
            isStart: false,
            isFinish: true,
            isModalClose: false,
            curId: "",
            result: [],
            resultQuestion: state.question,
            question: questionsList,        
            lastId: id
        }));
    };
    renderModalWindow  = () => {
        return (   
            <div className="quiz__modal modal">
                <div className="quiz__result modal__body">
                    <h2 className="modal__title">Результат</h2>
                    <div className="quiz__result_model">
                        <model-viewer 
                            src={this.state.resultQuestion.answers[this.state.lastId - 1].model.GLB} 
                            ios-src={this.state.resultQuestion.answers[this.state.lastId - 1].model.USDZ} 
                            id="model-viewer" alt="Посмотри на логотип ГК «INGRAD» в дополненной реальности!" 
                            background-color="darkgray" 
                            link="https://www.ingrad.ru/" 
                            auto-rotate 
                            ar 
                            ar-modes="webxr scene-viewer quick-look" 
                            quick-look-browsers="safari chrome" 
                            ar-scale="auto" 
                            camera-controls>
                                <button slot="ar-button" className="modal__button button">ПОСМОТРЕТЬ В AR</button>
                        </model-viewer>
                    </div>
                    <div className="modal__close" onClick={this.closeModal}>
                        <span></span>
                        <span></span>
                    </div>
                    </div> 
                    <div className="modal__bg" onClick={this.closeModal}></div>
                </div>            
        );
    };
    closeModal = () => {
        this.setState( () => ({
            isModalClose: true,
            isFinish: false,
        }));
    };
    nextQuestion = () => {
        if (this.state.curId) {
            this.setState( state => ({
                questionNumber: state.questionNumber + 1,
                curId: "",
                result: state.result.concat([state.curId]),
                question: state.question.nextQuestion[state.curId],
            }));
        }
        
    };
    prevQuestion = () => {
        let newResult = this.state.result.slice(0);
        newResult.pop();

        let newQuestion = questionsList;

        for (let i = 0; i < this.state.result.length - 1; i++) {            
            newQuestion = newQuestion.nextQuestion[newResult[i]];
        }

        this.setState( state => ({
            questionNumber: state.questionNumber - 1,
            curId: "",
            result: newResult,
            question: newQuestion,
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
                        this.state.isStart || this.state.isFinish ?
                            (this.renderQuestion(this.state.question)) :
                            (<div className="questions__button" onClick={() => this.startQuiz()}></div>)
                    }
                    {
                        !this.state.isModalClose? 
                            this.renderModalWindow():
                            ""
                    }
                    
                </div>
            </div>
            
        );
    }
    
}

export default Quiz;
