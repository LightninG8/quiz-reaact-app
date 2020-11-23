import React, {Component} from 'react';

import "./question-area.scss";

import Quiz from "../quiz";

// Изображения


class QuestionArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStart: false,
            isFinish: false
        };
    }
    startQuiz = () => {
        this.setState({
            isStart: true,
            questionCounter: 0,
        });      
    };
    nextQuestion = () => {
        const counter = this.state.questionCounter + 1;

        this.setState({
            questionCounter: counter,
        });
    };
    render() {
        return (
            <div className="questions__area">
                {this.state.isStart ?
                    (<Quiz number={this.state.questionCounter} nextQuestion={this.nextQuestion}/>) :
                    (<div className="questions__button" onClick={() => this.startQuiz()}></div>)
                 }      
            </div>

            
        );
    }
    
}

export default QuestionArea;
