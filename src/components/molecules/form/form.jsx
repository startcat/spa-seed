/* @flow */

type Props = { children: any, isDisabled?: boolean };

export default (props: Props) => {
  let className = "m-form";
  if (props.isDisabled === true) {
    className += " m-form--disabled";
  }
  return (
    <div className={className}>
      {(props.children.map ? props.children : [props.children]).map(item => {
        return item;
      })}
    </div>
  );
};
