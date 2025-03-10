import React from "react";
import PropTypes from "prop-types";

// Компоненты


// Изображения

class AnswerItem extends React.Component {
    static propTypes = {
        answerId: PropTypes.string,
        answerValue: PropTypes.string,
        answerImage: PropTypes.string,
        className: PropTypes.string,
        onClickHandler: PropTypes.func,
        onFinishQuiz: PropTypes.func,
        type: PropTypes.string,
    };
    constructor(props) {
        super(props);
    }
    render() {
        const {answerId, answerValue, answerImage, type, onClickHandler, onFinishQuiz, className} = this.props;
        if (type === "radio") {
            return (
                <div className="form__elem">
                    <label htmlFor={answerId}  className="form__label" onClick={() => onClickHandler(answerId)}>
                        <img src={answerImage} className="form__image" alt=""/>
                        <input className="form__radio" name="item" type="radio" id={answerId} value={answerId} />
                        <div className={`form__input ${className}`}>{answerValue}</div>
                    </label>
                </div>  
            );  
        } else if (type === "cards") {
            return (
                <div className="form__item" onClick={() => onFinishQuiz(answerId)}>
                    <div className="form__item_image">
                        <img src={answerImage} alt=""/>
                    </div>
                    <div className="button form__item_button" key={answerId} >
                        {answerValue}
                    </div> 
                </div>     
            );
        }
         
        
    }
    
}

export default AnswerItem;
