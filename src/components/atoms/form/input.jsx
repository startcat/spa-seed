/* @flow */

type Props = {
  type?: string,
  onChange?: Function,
  modifiers: Array<string>
};

export default (props: Props) => {
  let className = "a-input";
  let classNameControl = "a-input__control";

  if (props.modifiers) {
    props.modifiers.forEach(modifier => {
      className += " a-input--" + modifier;
      classNameControl += " a-input__control--" + modifier;
    });
  }

  const onChangeHandler = () => {
    if (props.onChange) {
      props.onChange();
    }
  };

  return (
    <div className={className}>
      <input
        className={classNameControl}
        type={props.type || "text"}
        onChange={onChangeHandler}
      />
    </div>
  );
};
