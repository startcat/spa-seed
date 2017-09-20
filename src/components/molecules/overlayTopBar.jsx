/* @flow */

type Props = {
  title?: string,
  children: any
};

export default (props: Props) => {
  let className = "m-overlayTopBar";
  return (
    <div className={className}>
      {props.title
        ? <div className="m-overlayTopBar__title">
            {props.title}
          </div>
        : null}
      <div className="m-overlayTopBar__content">
        {props.children}
      </div>
    </div>
  );
};
