/* @flow */

type Props = { title: string, subtitle?: string };

export default (props: Props) => {
  let className = "m-formTitle";
  return (
    <div key={props.title} className={className}>
      <div className="m-formTitle__title">
        {props.title}
      </div>
      {props.subTitle
        ? <div className="m-formTitle__subTitle">
            {props.subTitle}
            }
          </div>
        : null}
    </div>
  );
};
