/* @flow */

import Input from "components/atoms/form/input";
import Button from "components/atoms/form/button";

type Props = {};

export default (props: Props) => {
  // Private Properties

  let className = "o-signInForm";
  let userInput = null;
  let passwordInput = null;

  // Private Methods

  const validate = () => {
    const user = userInput && userInput.get();
    const password = passwordInput && passwordInput.get();
  };

  // Handlers

  const onChangeHandler = () => {};

  // Render

  return (
    <div className={className}>
      <div className="o-signInForm__input o-signInForm__input--user">
        <Input
          type="text"
          modifiers={["center"]}
          onChange={onChangeHandler}
          ref={input => {
            userInput = input;
          }}
        />
      </div>
      <div className="o-signInForm__input o-signInForm__input--password">
        <Input
          type="password"
          modifiers={["center"]}
          onChange={onChangeHandler}
          ref={input => {
            passwordInput = input;
          }}
        />
      </div>
      <div className="o-signInForm__button">
        <Button>Entrar</Button>
      </div>
    </div>
  );
};
