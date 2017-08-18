/* @flow */

type Props = {
  className: string,
  content: any
};

export default (props: Props) => {
  let className = "t-main";
  return (
    <div className={className + " " + props.className}>
      {props.content}
    </div>
  );
};
