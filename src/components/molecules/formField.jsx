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
  return (
    <div className={className}>
      <div className="m-formField__label">
        {props.icon
          ? <div className="m-formField__icon">
              <Icon name={props.icon} />
            </div>
          : null}
        <div className="m-formField__caption">
          {props.label}
        </div>
      </div>
      <div className="m-formField__input">
        {props.children}
      </div>
      {props.error
        ? <div className="m-formField__error">
            {props.error}
          </div>
        : null}
    </div>
  );
};
