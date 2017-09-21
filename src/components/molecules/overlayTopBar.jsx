/* @flow */

type Props = {
  title?: string,
  bullet?: number,
  children: any
};

export default (props: Props) => {
  let className = "m-overlayTopBar";
  return (
    <div className={className}>
      {props.title
        ? <div className="m-overlayTopBar__titleContainer">
            <div className="m-overlayTopBar__title">
              {props.title}
            </div>
            {props.bullet
              ? <div className="m-overlayTopBar__bulletContainer">
                  <div className="m-overlayTopBar__bullet">
                    {props.bullet}
                  </div>
                </div>
              : null}
          </div>
        : null}
      <div className="m-overlayTopBar__content">
        {props.children}
      </div>
    </div>
  );
};
