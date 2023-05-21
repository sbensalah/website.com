import React, { Component} from "react";
import "./Main.css";
import msg from './languages/msg';


export class Main extends Component {

  render() {
    return (
      <div className="body-container">
        <div className="main">
          <div>
            <div className="logo">
            {msg('main.folio')}<b className="dot">.</b>
            </div>
          </div>
          <div className=" d-sm-flex d-lg-flex justify-content-center ">
            <div className="presentation">
              <p className="m-1 p-1 hello">{msg('main.hello')}</p>
              <p className="m-1 p-1 coderTitle">{msg('main.coder.text')}</p>
              <p className="m-1 p-1 presentation">{msg('main.presentation')}</p>
              <p className="m-1 p-1 presentation">{msg('main.presentation.ask.contact')}
              </p>
            </div>
            <div
              className="m-1 p-1 "
              style={{ backgroundColor: "transparent" }}
            >
              <img
                className="img-container1"
                src="./media/myPhoto.JPG"
                alt="holdimage"
              />
            </div>
          </div>
          <div className="  d-lg-flex d-sm-flex justify-content-center justify-content-around  bg-transparent m-1 p-1 bg-light">
            <div className="card justify-content-around bg-white m-1 p-1 bg-light box">
              <div className="card-body text-center text-dark">
                <h2  className="card-title py-2">{msg('main.backend.title')} </h2>
                <p className="card-text subpresentation">{msg('main.backend.text')}
                </p>
              </div>
            </div>
            <div className="card justify-content-around bg-white m-1 p-1 bg-light box">
              <div className="card-body text-center text-dark">
                <h2 className="card-title py-2 ">{msg('main.frontend.title')}</h2>
                <p className="card-text subpresentation">{msg('main.frontend.text')}
                </p>
              </div>
            </div>
            <div className="card justify-content-around bg-white m-1 p-1 bg-light box">
              <div className="card-body text-center text-dark">
                <h2 className="card-title py-2">{msg('main.hobbies.title')}</h2>
                <p className="card-text subpresentation">{msg('main.hobbies.text')}
                </p>
              </div>
            </div>
          </div>
          <div className=" d-sm-flex d-lg-flex m-1 p-1">
            <div className="card m-1 p-1">
             <p className="m-1 p-1 card-title sdlcQuestion">{msg('sdlc.question')}</p>
             <p className="m-1 p-1 card-title sdlcPresentation">{msg('sdlc.presentation')}</p>
              <div className="m-1 p-1 " style={{ backgroundColor: "transparent" }} >
              <img
                className="img-container2"
                src="./media/softwareDevLifeCycle.PNG"
                alt="holdimage"
              />
              </div>
            </div>
          </div>
        </div>
        <section className="footer">
          <div className=" social text-center">
          <a href="mailto:sb.salah17@gmail.com" className="icon fa fa-envelope"></a>
            <a
              href="https://www.instagram.com/letstalk_coding"
              className="icon fa fa-instagram"/>
            <a
              href="https://fr.linkedin.com/in/soumaya-ben-salah-44591a84"
              className="icon fa fa-linkedin"/>
          </div>
        </section>
      </div>
    );
  }
}
export default Main;
