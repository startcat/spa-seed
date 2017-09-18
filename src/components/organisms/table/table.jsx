/* @flow */

import { default as React } from "react";
import type { TableColumn } from "domain/types/ui";

// Types

type Props = {
  columns: Array<TableColumn>,
  data: Array<Object>,
  initialPage?: ?number,
  pages?: ?number,
  keyProperty: string
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
    const className = "o-table";
    return (
      <div className={className}>
        <div className="o-table__row o-table__row--header">
          {this.props.columns.map(column => {
            return (
              <div
                className="o-table__cell o-table__cell--header"
                key={column.id}
              >
                {column.caption}
              </div>
            );
          })}
        </div>
        {this.props.data.map((row, index) => {
          return (
            <div className="o-table__row" key={row[this.props.keyProperty]}>
              {this.props.columns.map(column => {
                return (
                  <div className="o-table__cell" key={column.id}>
                    {column.template && column.template(row[column.id])}
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
