/* @flow */

type Props = {
  children: any,
  type?: string,
  onClick?: Function
};

export default (props: Props) => {
  let className = "a-button";

  const onClickHandler = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className={className}>
      <button className="a-button__control" onClick={onClickHandler}>
        {props.children}
      </button>
    </div>
  );
};
