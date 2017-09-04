/* @flow */

type Props = {};

export default (props: Props) => {
  let className = "a-loader";
  return (
    <div className={className}>
      <img src="/img/loader.svg" />
    </div>
  );
};
