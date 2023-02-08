import React from "react";

export default function AboutPage() {

  return (
    <div className="about-page" style={{ display: 'grid', height: '80vh', placeContent: 'center' }}>
      <div className="card">
        <div className="card-body p-5 text-center">
          <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463"
            alt="CodeWorks Logo"
            className="rounded-circle" height="200" />
          <p className="display-6 my-2">CodeWorks React</p>
          <kbd>
            Starter Template
          </kbd>
        </div>
      </div>
    </div>
  )
}