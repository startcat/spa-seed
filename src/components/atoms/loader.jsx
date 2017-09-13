/* @flow */

type Props = {};

export default (props: Props) => {
  let className = "a-loader";
  return (
    <div className={className}>
      <img className="a-loader__image" src="/img/loader.svg" />
    </div>
  );
};
