import React from "react";

const Airfit = () => {
  return (
    <div>
      <div className="projects__content">
        <h3 className="projects__title">
          Daad AirFit <br /> Web Site
        </h3>
        <div className="projects__box">
          <div className="projects__group">
            <div className="projects__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="projects__name">Django</h3>
              </div>
            </div>

            <div className="projects__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="projects__name">HTML</h3>
              </div>
            </div>

            <div className="projects__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="projects__name">CSS</h3>
              </div>
            </div>

            <div className="projects__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="projects__name">Bootstrap</h3>
              </div>
            </div>

            <a
              href="https://www.redcad.tn/projects/airfit"
              className="projects__button"
              target="_blank"
            >
              View Website
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </a>

            <a target="_blank" href="https://github.com/hedisamet/Airfit-Website" className="projects__button">
              {" "}
              Source Code
              <i className="mdi mdi-code-braces projects__button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airfit;
