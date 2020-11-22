import React from "react";
import PropTypes from "prop-types";

import "./question.scss";

// Компоненты


// Изображения


class Question extends React.Component {
    static propTypes = {
        animate: PropTypes.bool,
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="question">
                It is question
            </div>
        );
    }
    
}

export default Question;
