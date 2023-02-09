import React, { useState } from "react";
import "./App.css";
function App() {
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);
  const contentHandler = (event) => {
    setContent(event.target.value);
  };
  const onChangeHandler = () => {
    let newData = {
      id: data.length + 1,
      content: content,
    };
    setData([...data, newData]);
  };
  // console.log(data);

  return (
    <div>
      <div className="headbox">
        <input type="text" value={content} onChange={contentHandler} />
        <button onClick={onChangeHandler}>추가하기</button>
        <h2>Todo List</h2>
      </div>
      <div>
        {data.map((td) => {
          return <TodoCard td={td} key={data.id} />;
        })}
      </div>
    </div>
  );
}
const TodoCard = (props) => {
  const { td } = props;
  return (
    <div className="squareStyle">
      <p>{td.content}</p>
    </div>
  );
};

export default App;
