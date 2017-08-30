/* @flow */

type Props = {
  type?: string,
  onChange?: Function
};

export default (props: Props) => {
  let className = "a-input";

  const onChangeHandler = () => {
    if (props.onChange) {
      props.onChange();
    }
  };

  return (
    <div className={className}>
      <input
        className="a-input__control"
        type={props.type || "text"}
        onChange={onChangeHandler}
      />
    </div>
  );
};
