/* @flow */

type Props = {
  children: any
};

export default (props: Props) => {
  let className = "m-overlayTopBar";
  return (
    <div className={className}>
      <div className="m-overlayTopBar__content">
        {props.children}
      </div>
    </div>
  );
};
