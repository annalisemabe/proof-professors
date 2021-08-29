import React from "react";

export default class ContactPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;

    return <div className="contact-form ph3 bg-off-white  ">
      <div className="center mw6 pv3">
        <h1 class="f4 b lh-title mb2 primary">{entry.getIn(["data", "title"])}</h1>
        { widgetFor("body") }

        (Form will be here)
      </div>  
    </div>;
  }
}
