/* @flow */

type Props = { children: any, id: string };

export default (props: Props) => {
  let className = "m-formRow";
  return (
    <div key={props.id} className={className}>
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
