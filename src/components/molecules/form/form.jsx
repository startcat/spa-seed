/* @flow */

type Props = { children: any };

export default (props: Props) => {
  let className = "m-form";
  return (
    <div className={className}>
      {(props.children.map ? props.children : [props.children]).map(item => {
        return item;
      })}
    </div>
  );
};
