import './style.scss';
import React from 'react';
import Typed from 'react-typed';

const HomePage = () => {
    return(
        <div className="home-page">
            <div className="home-page__title">
                <h1 className="home-page__title__glitch">Мое тестовое задание</h1>
            </div>
            <div className="home-page__content">
                <h2 className="home-page__content__title">
                    <Typed
                        strings={[
                            'Тут я показываю свои навыки',
                            'Узнаю новые фишки',
                            'Да и просто забиваю свой GitHub'
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </h2>
            </div>
        </div>
    )
};

export default HomePage;