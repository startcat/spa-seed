/* @flow */

import { default as React } from "react";
import type { TableColumn } from "domain/types/ui";

// Types

type Props = {
  columns: Array<TableColumn>,
  data: Array<Object>,
  initialPage?: ?number,
  pages?: ?number
};

type State = {
  page: number
};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;

  state: State = {
    page: this.props.initialPage || 0
  };

  // Event Handlers

  // Render

  render() {
    let className = "o-table";
    return (
      <div className={className}>
        <div className="o-table__row o-table__row--header">
          {this.props.columns.map(column => {
            return (
              <div className="o-table__cell o-table__cell--header">
                {column.caption}
              </div>
            );
          })}
        </div>
        {this.props.data.map(row => {
          return (
            <div className="o-table__row">
              {this.props.columns.map(column => {
                return (
                  <div className="o-table__cell">
                    {column.template(row[column.id])}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
