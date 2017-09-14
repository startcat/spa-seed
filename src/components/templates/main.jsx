/* @flow */

type Props = {
  className: string,
  sideBar: any,
  topBar: any,
  children: any
};

export default (props: Props) => {
  let className = "t-main " + props.className;
  return (
    <div className={className}>
      <div className="t-main__sideBar">
        {props.sideBar}
      </div>
      <div className="t-main__topBar">
        {props.topBar}
      </div>
      <div className="t-main__content">
        {props.children}
      </div>
    </div>
  );
};
