import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <div className="container header-inner">
          <div className="id-block">
            <img
              src="assets/my profile.jpg"
              alt="Moulya S"
              className="avatar"
            />
            <div>
              <h1 className="title">Moulya S</h1>
              <p className="subtitle">
                Aspiring Software Engineer • Frontend & AI Enthusiast
              </p>
              <div className="links">
                <a
                  className="btn btn-3d"
                  href="https://github.com/MoulyaS19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="btn btn-3d"
                  href="https://www.linkedin.com/in/moulya-s-93813a27b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn-3d outline"
                  href="assets/Moulya S_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
