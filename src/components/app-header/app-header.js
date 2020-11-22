import React from "react";

import "./app-header.scss";

// Изображения
import callbackIcon from "../../img/app-header/callback.svg";

function AppHeader() {
    return (
        <header className="header">
            <div className="container header__body">
                <div className="header__logo logo" onClick={() => {alert("Click");}}>
                    <div className="logo__button">
                        <span className="logo__button-line"></span>
                        <span className="logo__button-line"></span>
                        <span className="logo__button-line"></span>
                    </div>
                    <div className="logo__name">LOGO</div>
                </div>
                <div className="header__callback callback">
                    <div className="callback__icon">
                        <img src={callbackIcon} alt="callback icon"/>
                    </div>
                    <div className="callback__text">
                        <div className="callback__phone">+7 931 390 95 23</div>
                        <a href="#" className="callback__callback">Заказать обратный звонок</a>
                    </div>
                </div>
            </div>           
        </header>
    );
}

export default AppHeader;