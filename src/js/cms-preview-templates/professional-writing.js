import React from "react";
import Jumbotron from "./components/jumbotron";

const MediaBlock = ({heading, text, imageUrl, reverse}) => {
  const imageContainerClassName = reverse
    ? "ph3-m w-50-m"
    : "ph3-m w-50-m order-last-m";
  return <div className="flex-m mhn3-m mb4">
    <div className={imageContainerClassName}>
      <img src={imageUrl} alt="" className="db mb2" />
    </div>
    <div className="ph3-m w-50-m">
      <h3 className="f3 b lh-title mb1">{heading}</h3>
      <p>{text}</p>
    </div>
  </div>;
};

export default class ProfessionalWritingPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <div>
      <Jumbotron image={getAsset(entry.getIn(["data", "image"]))} title={entry.getIn(["data", "title"])} />
      <div class="mw7 center ph3 pt4">
        { widgetFor("body") }
      </div>
    </div>;
  }
}