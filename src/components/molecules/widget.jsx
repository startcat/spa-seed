/* @flow */

type Props = { title: string, columns: 1 | 2 | 3, children: any };

export default (props: Props) => {
  let className = "m-widget m-widget--" + props.columns;
  return (
    <div className={className}>
      <div className="m-widget__container">
        <div className="m-widget__title">
          {props.title}
        </div>
        <div className="m-widget__content">
          {props.children}
        </div>
      </div>
    </div>
  );
};
