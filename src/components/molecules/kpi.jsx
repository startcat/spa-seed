/* @flow */

type Props = {
  data: number,
  type: string,
  state?: "Good" | "Warning" | "Danger"
};

export default (props: Props) => {
  let className =
    "m-kpi m-kpi--" +
    (props.state || "Good").toLowerCase() +
    " m-kpi--" +
    (props.type || "Number").toLowerCase();
  return (
    <div className={className}>
      <div className="m-kpi__container">
        <div className="m-kpi__valueContainer">
          <div className="m-kpi__value">
            {props.data}
          </div>
        </div>
        <div className="" />
      </div>
    </div>
  );
};
