import ReactDOM from "react-dom";
import React from "react";
import { UserSearch } from "./refs/UserSearch";
// import { EventComponent } from "./events/EventComponents";

export const App = () => {
  return (
    <div>
      <h1>
        {/* <EventComponent /> */}
        <UserSearch></UserSearch>
      </h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
