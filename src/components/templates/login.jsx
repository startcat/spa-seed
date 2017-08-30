/* @flow */

type Props = {
  children: any
};

export default (props: Props) => {
  let className = "t-login";
  return (
    <div className={className}>
      <div className="t-login__box">
        <div className="t-login__logo" />
        <div className="t-login__content">
          {props.children}
        </div>
      </div>
    </div>
  );
};
