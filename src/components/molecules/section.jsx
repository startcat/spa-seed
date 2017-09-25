/* @flow */

type Props = { title: string, children: any };

export default (props: Props) => {
  let className = "m-section";
  return (
    <div className={className}>
      <div className="m-section__title">
        {props.title}
      </div>
      <div className="m-section__content">
        {props.children}
      </div>
    </div>
  );
};
