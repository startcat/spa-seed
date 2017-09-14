/* @flow */

type Props = {
  className?: string,
  name: string,
  bullet?: ?number,
  onClick?: Function
};

export default (props: Props) => {
  let className =
    "a-icon" +
    (props.onClick ? " a-icon__clickable" : "") +
    (props.className ? " " + props.className : "");
  return (
    <div className={className} onClick={props.onClick || (() => {})}>
      {props.bullet
        ? <div className="a-icon__bullet">
            {props.bullet}
          </div>
        : null}

      <i className="a-icon__icon material-icons">
        {props.name}
      </i>
    </div>
  );
};
