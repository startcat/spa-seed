/* @flow */

import { default as React } from "react";
import Section from "components/molecules/section";
import Loader from "components/atoms/loader";
import store from "store";

// Types

type Props = {};
type State = { isLoading: boolean };

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = { isLoading: true };

  // Event Handlers

  // Life Cycle

  async componentDidMount() {
    this.setState({ isLoading: true });
    await store.dashboard.getDashboard();
    this.setState({ isLoading: false });
  }

  // Render

  render() {
    let className = "o-dashboard";
    return (
      <div className={className}>
        {this.state.isLoading
          ? <div className="o-dashboard__loader">
              <Loader />
            </div>
          : this.props.sections
            ? this.props.sections.map(section => {
                return (
                  <div
                    key={section.id}
                    className={
                      "o-dashboard__section o-dashboard__section--" + section.id
                    }
                  >
                    <Section title={section.title}>
                      {section.content}
                    </Section>
                  </div>
                );
              })
            : null}
      </div>
    );
  }
}
