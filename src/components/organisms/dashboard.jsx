/* @flow */

import { default as React } from "react";
import Widget from "components/molecules/widget";
import KPI from "components/molecules/kpi";
import Chart from "components/molecules/chart";
import Section from "components/molecules/section";
import Loader from "components/atoms/loader";
import store from "store";
import { default as mobx } from "mobx";

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
          : store.dashboard.sections
            ? store.dashboard.sections.map(section => {
                return (
                  <div
                    key={section.id}
                    className={
                      "o-dashboard__section o-dashboard__section--" + section.id
                    }
                  >
                    <Section title={section.title}>
                      {section.content.map(item => {
                        return (
                          <Widget
                            title={item.title}
                            columns={item.columns || 1}
                          >
                            {["Number", "Perc"].indexOf(item.type) !== -1
                              ? <KPI
                                  type={item.type}
                                  data={mobx.toJS(item.data)}
                                  options={mobx.toJS(item.options)}
                                />
                              : <Chart
                                  type={item.type}
                                  data={mobx.toJS(item.data)}
                                  options={mobx.toJS(item.options)}
                                />}
                          </Widget>
                        );
                      })}
                    </Section>
                  </div>
                );
              })
            : null}
      </div>
    );
  }
}
