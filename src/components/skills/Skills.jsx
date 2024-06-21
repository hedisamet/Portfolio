import React from 'react';
import "./skills.css";

import Frontend from './Frontend';
import Backend from './Backend';
import Design from './Design';
import Ai from './Ai';
const Skills = () => {
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
            <Ai/>
            <Frontend/>
            <Backend/>
            <Design/>
        </div>
      </section>
    </div>
  )
}

export default Skills
