import React, {Component} from 'react';

import "./question-area.scss";

import Quiz from "../quiz";

// Изображения


class QuestionArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStart: false,
            isFinish: false,
            resultWord: "",
            curId: "",
            result: {
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
            },
            questionCounter: 0,
        };
    }
    startQuiz = () => {
        this.setState(() => ({
            isStart: true,          
        }));      
    };
    finishQuiz = () => {
        this.setState(() => ({
            isStart: false,  
            isFinish: true,
        }));
    };
    nextQuestion = () => {
        if (!this.state.isFinish && this.state.curId) {
            this.setState(state => ({
                questionCounter: state.questionCounter + 1,
                curId: null,
            }));
        }
    };
    modalWindow = (result) => {
        return (
            <div>
                {result.model}<br/>
                {this.state.resultWord}
            </div>
        );
    };
    selectAnswer = (id) => {
        this.setState(state => ({
            curId: id,
            resultWord: state.resultWord + " " + id,
            result: state.result[id],
        }));
    };
    render() {
        return (
            <div className="questions__area">
                {this.state.isStart ?
                    (<Quiz 
                        question={this.state.questionCounter} 
                        nextQuestion={this.nextQuestion} 
                        finishQuiz={this.finishQuiz} 
                        selectAnswer={this.selectAnswer} 
                        answersResult={this.state.result}/>) :
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
