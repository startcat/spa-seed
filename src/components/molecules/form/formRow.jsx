/* @flow */

type Props = { children: any };

export default (props: Props) => {
  let className = "m-formRow";
  return (
    <div className={className}>
      {(props.children.map ? props.children : [props.children]).map(item => {
        return (
          <div className="m-formRow__cell">
            {item}
          </div>
        );
      })}
    </div>
  );
};
