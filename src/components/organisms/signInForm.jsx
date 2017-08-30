/* @flow */

type Props = {};

export default (props: Props) => {
  let className = "o-signInForm";
  return (
    <div className={className}>
      <div className="o-signInForm__email">
        <input type="text" />
      </div>
      <div className="o-signInForm__password">
        <input type="password" />
      </div>
    </div>
  );
};
