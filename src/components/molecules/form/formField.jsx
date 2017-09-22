/* @flow */

import Icon from "components/atoms/icon";

type Props = {
  label: string,
  icon?: string,
  isRequired?: boolean,
  error?: ?string,
  children: any
};

export default (props: Props) => {
  let className = "m-formField";
  if (props.error) {
    className += " m-formField--error";
  }
  return (
    <div className={className}>
      <div className="m-formField__input">
        {props.children}
        <div className="m-formField__label">
          {props.icon
            ? <div className="m-formField__icon">
                <Icon name={props.icon} />
              </div>
            : null}
          <div className="m-formField__caption">
            {props.label}
            {props.isRequired
              ? <div className="m-formField__required">*</div>
              : null}
          </div>
        </div>
      </div>
      {props.error
        ? <div className="m-formField__error">
            {props.error}
          </div>
        : null}
    </div>
  );
};
