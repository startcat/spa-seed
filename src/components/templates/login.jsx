/* @flow */

type Props = {
  className: string,
  children: any
};

export default (props: Props) => {
  let className = "t-login";
  return (
    <div className={className + " " + props.className}>
      {props.children}
    </div>
  );
};
