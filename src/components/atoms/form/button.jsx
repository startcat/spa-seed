/* @flow */

type Props = {
  children: any,
  type?: string,
  onClick?: Function
};

export default (props: Props) => {
  let className = "a-button";
  let classNameControl = "a-button__control";

  if (props.disabled) {
    className += " a-button--disabled";
    classNameControl += "a-button__control--disabled";
  }

  const onClickHandler = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className={className}>
      <button className={classNameControl} onClick={onClickHandler}>
        {props.children}
      </button>
    </div>
  );
};
