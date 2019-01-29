import React from "react";
import ReactDOM from "react-dom";

import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  const tim = faker.image.avatar();
  return (
    <div className="ui container comments">
        <CommentDetail 
          author="Tim" 
          avatar={tim}
          date="Today at 6:00 PM"
          msg="Pancakes!"/>
        <CommentDetail 
          author="Nu" 
          avatar={faker.image.avatar()}
          date="Today at 7:00 PM"
          msg="Nice post!"/>
        <CommentDetail 
          author="Tim" 
          avatar={tim}
          date="Today at 8:00 PM"
          msg="Obvs..."/> 
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
