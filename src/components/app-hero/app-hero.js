import React from "react";

import "./app-hero.scss";

// Изображения
import arrowIcon from "../../img/app-hero/arrow.svg";
import dummyMobileImage from "../../img/app-hero/circles-mobile.png";
import dummyImage from "../../img/app-hero/circles.png";

function AppHero() {
    return (
        <section className="hero">
            <div className="container hero__body">
                <div className="hero__circles">
                    <img src={dummyMobileImage} alt="" className="hero__circles_image"/>
                </div>  
                <div className="hero__description">
                    <h1 className="hero__title">
                        ПРИМЕРКА <span className="hero__title_highlighted"> ОДЕЖДЫ</span> В AR
                    </h1>
                    <h3 className="hero__subtitle">Посмотри, как будет сидеть одежда на твоем теле не выходя из дома</h3>
                    <a href="#questions" className="hero__button"></a>
                    <div className="hero__leaf">
                        <img src={arrowIcon} alt="" className="hero__arrow"/>
                        Листай ниже
                    </div>
                </div>
                <div className="hero__advantages advantages">
                    
                    <ul className="advantages__advantages">
                        <li className="advantages__advantage">
                            <h4 className="advantages__advantage_title">Удобство</h4>
                            <div className="advantages__advantage_subtitle">Теперь не нужно выходить из дома, чтобы померить на себе одежду</div>
                        </li>
                        <li className="advantages__advantage">
                            <h4 className="advantages__advantage_title">Простота</h4>
                            <div className="advantages__advantage_subtitle">Чтобы померить одежду, нужно лишь знать и ввести свои размеры</div>
                        </li>
                        <li className="advantages__advantage">
                            <h4 className="advantages__advantage_title">Возможности</h4>
                            <div className="advantages__advantage_subtitle">Теперь легко можно подарить одежду близким и не боятся, что вещи не подойдут</div>
                        </li>
                        <li className="advantages__advantage">
                            <h4 className="advantages__advantage_title">Абсолютно бесплатно</h4>
                            <div className="advantages__advantage_subtitle">Чтобы померить одежду вам не надо тратить денег</div>
                        </li>
                    </ul>
                    <div className="advantages__dummy">
                        <img src={dummyImage} alt="" className="advantages__circles"/>
                    </div>
                </div>
                        
            </div>
        </section>
    );
}

export default AppHero;