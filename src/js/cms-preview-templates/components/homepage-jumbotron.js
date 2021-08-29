import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;
    return <div>
      <div className="pv5 pv6-l ph3 bg-center cover" style={{
        backgroundImage: image && `url(${image})`
      }}>
        <canvas id="canvas"></canvas>
        <div class="mw7 ph3">
          <div class="db mb3 intersection-obv ">
            <div class="mw7 relative bg-fix-primary mb3 animated-text">
              <h1 class="hero-text f2 f1-l b di lh-title mb3 primary mw6">
                {title}
              </h1>
            </div>
            <div class="mw7 relative bg-fix-primary animated-text">
              {subtitle && <p className="b f4 di lh-title mb3 white mw6 bg-primary">{ subtitle }</p>}
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
