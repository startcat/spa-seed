/* @flow */

type Props = {
  className: ?string,
  name: string
};

export default (props: Props) => {
  let className =
    "a-icon material-icons" + (props.className ? " " + props.className : "");
  return (
    <i className={className}>
      {props.name}
    </i>
  );
};
