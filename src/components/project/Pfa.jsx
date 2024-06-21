import React from "react";

const Pfa = () => {
  return (
    <div>
      <div className="projects__content">
        <h3 className="projects__title">
          Deep Learning-Based Text Reading in the Wild
        </h3>
        <div className="projects__box">
          <div className="projects__group">
            <div className="projects__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="projects__name">TensorFlow</h3>
              </div>
            </div>

            <div className="projects__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="projects__name">Resnet 50</h3>
              </div>
            </div>

            <div className="projects__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="projects__name">VGG 16</h3>
              </div>
            </div>

            <div className="projects__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="projects__name">Flask</h3>
              </div>
            </div>

            <a target="_blank" href="https://github.com/hedisamet/Text-Reading-in-the-Wild" className="projects__button">
              Source Code
              <i className="mdi mdi-code-braces projects__button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pfa;
