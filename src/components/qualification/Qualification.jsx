import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Baccalaureate in Mathematics</h3>
                <span className="qualification__subtitle">Habib Thameur High School, Sfax</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Mathematics and Physics</h3>
                <span className="qualification__subtitle">Preparatory Institute for Engineering Studies of Sfax</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020-2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">COMPUTER ENGINEERING</h3>
                <span className="qualification__subtitle">National School of Engineers of Sfax</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developement Intership</h3>
                <span className="qualification__subtitle">Digital Research Center of Sfax</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
              <h3 className="qualification__title">Design Team Leader</h3>
                <span className="qualification__subtitle">PYFAC 9</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
              <h3 className="qualification__title">Webmaster</h3>
                <span className="qualification__subtitle">IEEE ENIS Sudent Branch</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2024-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
