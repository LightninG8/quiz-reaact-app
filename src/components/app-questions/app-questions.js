import React from "react";

import "./app-questions.scss";

// Компоненты
import QuestionArea from "../question-area";

// Изображения
import underchitImage from "../../img/app-questions/underchit.png";
import skirtImage from "../../img/app-questions/skirt.png";

function AppQuestions() {
    return (
        <section className="questions" id="questions">
            <div className="container questions__body">
                <div className="questions__header">
                    <h2 className="questions__title">Ответьте на несколько вопросов</h2>
                    <h3 className="questions__subtitle">И посмотрите, как будет выглядить одежда на вас</h3>
                </div>
                <QuestionArea></QuestionArea>
            </div>
            <img src={underchitImage} alt="Майка" className="questions__underchit questions__background" />
            <img src={skirtImage} alt="Юбка"className="questions__skirt questions__background"/>
        </section>
    );
}

export default AppQuestions;
