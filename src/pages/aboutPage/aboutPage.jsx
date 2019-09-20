import './aboutPage.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <div className="about">
            <div className="about__button-back">
                <Link className="about__link" to="/">Home</Link>
            </div>
            <div className="about__parallax-wrapper-one">
                <div className="about__parallax-wrapper-one__parallax">
                    <div className="about__parallax-wrapper-one__parallax__content">
                        <h1>Тестовое задание написано на React JS + SCSS</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        </p>
                    </div>
                </div>
            </div>
            <div className="about__regular-one">
                <div className="about__regular-one__content">
                    <h1>Страница создана для представление Параллакса</h1>
                </div>
            </div>
            <div className="about__parallax-wrapper-two">
                <div className="about__parallax-wrapper-two__parallax">
                    <div className="about__parallax-wrapper-two__parallax__content">
                        <h1>Тестовое задание написано на React JS + SCSS</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        </p>
                    </div>
                </div>
            </div>
            <div className="about__regular-two">
                <div className="about__regular-two__content">
                    <h1>Страница создана для представление Параллакса</h1>
                </div>
            </div>
        </div>
    )
};

export default About;