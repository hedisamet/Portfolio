import React, { useState } from "react";
import "./project.css";
import Web from './Web';
import Ai from './Ai';
import Design from './Design';

const Project = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div>
            <section className="projects section" id="projects">
                <h2 className="section__title">Projects</h2>
                <span className="section__subtitle">My personal projects</span>
                
                <div className="field__container container">
                    <div className="field__tabs">
                        <div
                            className={toggleState === 1 ? "field__button field__active button--flex" : "field__button button--flex"}
                            onClick={() => toggleTab(1)}
                        >
                            <i className="uil uil-window field__icon"></i>
                            Web Development
                        </div>
                        <div
                            className={toggleState === 2 ? "field__button field__active button--flex" : "field__button button--flex"}
                            onClick={() => toggleTab(2)}
                        >
                            <i className="mdi mdi-brain field__icon"></i>
                            AI Algorithms
                        </div>
                        <div
                            className={toggleState === 3 ? "field__button field__active button--flex" : "field__button button--flex"}
                            onClick={() => toggleTab(3)}
                        >
                            <i className="mdi mdi-grease-pencil field__icon"></i>
                            Graphic Design
                        </div>
                    </div>
                </div>
                
                <div className="field__sections">
                    <div className={toggleState === 1 ? "field__content field__content-active" : "field__content"}>
                        <Web />
                    </div>
                    <div className={toggleState === 2 ? "field__content field__content-active" : "field__content"}>
                        <Ai />
                    </div>
                    <div className={toggleState === 3 ? "field__content field__content-active" : "field__content"}>
                        <Design />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
