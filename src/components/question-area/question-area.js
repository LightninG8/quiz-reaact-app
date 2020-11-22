import React, {Component} from 'react';

import "./question-area.scss";

import Question from "../question";

// Изображения


class QuestionArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStart: false,
        };
    }
    startQuiz = () => {
        this.setState({
            isStart: true,
            questionCounter: 0,
        });      
    };
    render() {
        return (
            <div className="questions__area">
                {this.state.isStart ?
                    (<div className="questions__question">
                        <Question/>
                    </div>) :
                    (<div className="questions__button" onClick={() => this.startQuiz()}></div>)
                 }
                

                
            </div>

            
        );
    }
    
}

export default QuestionArea;
