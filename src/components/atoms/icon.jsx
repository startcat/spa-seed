/* @flow */

type Props = {
  className?: string,
  name: string,
  bullet?: ?number
};

export default (props: Props) => {
  let className = "a-icon" + (props.className ? " " + props.className : "");
  return (
    <div className={className}>
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
