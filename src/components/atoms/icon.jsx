/* @flow */

type Props = {
  className?: string,
  name: string,
  bullet?: ?number,
  onClick?: Function,
  modifiers?: Array<string>
};

export default (props: Props) => {
  let className =
    "a-icon" +
    (props.onClick ? " a-icon--clickable" : "") +
    (props.className ? " " + props.className : "");

  if (props.modifiers && props.modifiers.length > 0) {
    props.modifiers
      .filter(item => {
        return !!item;
      })
      .forEach(modifier => {
        className += " a-icon--" + modifier;
      });
  }

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
