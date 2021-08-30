import React from "react";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return (
      <div>
        <Jumbotron image={getAsset(entry.getIn(["data", "image"]))} title={entry.getIn(["data", "title"])} />
        <h1 class="controller">
          I'm interested in
          <select name="interest">
            <option>professional</option>
            <option>academic</option>
          </select>
          services
        </h1>

        <div className="bg-off-white mb3">
          <div className="mw7 center">

            <div className="flex-ns mhn2-ns mw7" data-services="professional">
              {(entry.getIn(['data', 'professional_services', 'plans']) || []).map((plan, index) => <div className="w-33-ns ph2 mb5" key={index}>
                <div className="ph2">

                  <h3 className="b f5 grey-3 tc lh-title mb3">{plan.get('plan')}</h3>

                  <p className="primary f1 b tc lh-title center">
                    <span className="f4 v-mid">$</span>{plan.get('price')}
                  </p>

                	<p className="b">{plan.get('description')}</p>

                  <ul>
                    {(plan.get('items') || []).map((item, index) => <li key={index}>
                      <p className={index + 1 !== plan.get('items').size ? "pb2 mb2 divider-grey" : null}>{item}</p>
                    </li>)}
                  </ul>

                </div>

              </div>)}
            </div>
          </div>
        </div>
        
        <div className="bg-off-white mb3">
          <div className="mw7 center">

            <div className="flex-ns mhn2-ns mw7" data-services="academic">
              {(entry.getIn(['data', 'academic_services', 'plans']) || []).map((plan, index) => <div className="w-33-ns ph2 mb5" key={index}>
                <div className="ph2">

                  <h3 className="b f5 grey-3 tc lh-title mb3">{plan.get('plan')}</h3>

                  <p className="primary f1 b tc lh-title center">
                    <span className="f4 v-mid">$</span>{plan.get('price')}
                  </p>

                	<p className="b">{plan.get('description')}</p>

                  <ul>
                    {(plan.get('items') || []).map((item, index) => <li key={index}>
                      <p className={index + 1 !== plan.get('items').size ? "pb2 mb2 divider-grey" : null}>{item}</p>
                    </li>)}
                  </ul>

                </div>

              </div>)}
            </div>
          </div>
        </div>


      </div>
    )
  }
}
