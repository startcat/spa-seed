import { observer } from "mobx-react";

export default observer(() => {
  let className = "l-root";
  return <div className={className} />;
});
