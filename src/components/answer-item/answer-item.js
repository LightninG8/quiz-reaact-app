import React from "react";
import PropTypes from "prop-types";

// Компоненты


// Изображения

class AnswerItem extends React.Component {
    static propTypes = {
        answerId: PropTypes.string,
        answerValue: PropTypes.string,
        className: PropTypes.string,
        onClickHandler: PropTypes.func,
    };
    constructor(props) {
        super(props);
    }
    render() {
        const {answerId, answerValue, className} = this.props;
        return (
            <div className="form-radio__item">
                <input className="form-radio__radio" name="item" type="radio" id={answerId} value={answerId} />
                <label htmlFor={answerId} className={`form-radio__label ${className}`} onClick={() => this.props.onClickHandler(answerId)}>{answerValue}</label>
            </div>  
        );   
        
    }
    
}

export default AnswerItem;
