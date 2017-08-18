import { observer } from "mobx-react";
import Main from "../templates/main.jsx";

export default observer(() => {
  return <Main className="p-home" content={"Hi from React component!"} />;
});
