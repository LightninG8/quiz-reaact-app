import React, {Component} from 'react';

import "./question-area.scss";

import Quiz from "../quiz";

import answersList from "./answers-list/answers-list";

// Изображения


class QuestionArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStart: false,
            isFinish: false,
            resultWord: "",
            curId: null,
            history: [
                {
                    curId: null,
                    questionCounter: 0,
                }
            ],
            stepNumber: 0,
            result: [],
        };
    }
    startQuiz = () => {
        this.setState(() => ({
            isStart: true,          
        }));      
    };
    finishQuiz = (id) => {
        let newResult = this.state.result.slice(0, this.state.stepNumber + 1);

        newResult[this.state.stepNumber] = id;

        this.setState(() => ({
            resultWord: newResult.join(" "),
            curId: id,
            result: newResult,
            isStart: false,  
            isFinish: true,
        }));
         
    };
    nextQuestion = () => {      
        if (!this.state.isFinish && this.state.curId) {
            const history = this.state.history.slice(0, this.state.stepNumber + 1);
        
            this.setState(state => ({
                history: state.history.concat([{
                    questionCounter: state.history[history.length - 1].questionCounter + 1,
                    curId: state.curId,
                }]),
                curId: null,
                stepNumber: this.state.stepNumber + 1,
            }));
        }
    };
    prevQuestion = () => {
        if (!this.state.isFinish && this.state.stepNumber != 0) {     
            this.setState(state => ({
                stepNumber: this.state.stepNumber - 1,
                result: state.result,
            }));
        }
    };
    modalWindow = (result) => {
        let modal;

        for (let i = 0; i < result.length; i++) {
            modal = i === 0 ? answersList[result[i]] : modal[result[i]];
        }

        console.log(modal);

        return (
            <div>
                {modal.model}<br/>
                {this.state.resultWord}
            </div>
        );
    };
    selectAnswer = (id) => {   
        let newResult = this.state.result.slice(0, this.state.stepNumber + 1);

        newResult[this.state.stepNumber] = id;

        this.setState( () => ({
            resultWord: newResult.join(" "),
            curId: id,
            result: newResult,
        }));

    };
    render() {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];


        let curId = this.state.result[2];


        console.log(curId);

        return (
            <div className="questions__area">
                {this.state.isStart ?
                    (<Quiz 
                        question={current.questionCounter} 
                        nextQuestion={this.nextQuestion}
                        prevQuestion={this.prevQuestion} 
                        finishQuiz={this.finishQuiz} 
                        selectAnswer={this.selectAnswer} 
                        stepNumber={this.stepNumber}
                        curId={curId}
                         />) :
                        this.state.isFinish ? 
                        (<div className="modal">
                            {this.modalWindow(this.state.result)}
                        </div>) :
                        (<div className="questions__button" onClick={() => this.startQuiz()}></div>)
                    
                 }      
            </div>

            
        );
    }
    
}

export default QuestionArea;
