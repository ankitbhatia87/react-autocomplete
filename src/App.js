import { useState } from "react";
import "./App.css";
import AutoSuggestions from "./components/AutoSuggestions/AutoSuggestions";
import InputField from "./components/InputField/InputField";

function App() {
  let timeout = undefined;
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const inputValueUpdateHandler = (updatedInputValue) => {
    timeout = !timeout
      ? setTimeout(() => {
          getData(updatedInputValue);
        }, 500)
      : (clearTimeout(timeout),
        (timeout = undefined),
        getData(updatedInputValue));
  };

  const getData = (updatedInputValue) => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${updatedInputValue}`
    )
      .then((response) => response.json())
      .then((data) => setFilteredSuggestions([...data]))
      .catch((err) => console.error(err));
  };

  let suggestions = filteredSuggestions.length > 0 && (
    <AutoSuggestions selectedSuggestions={filteredSuggestions} />
  );

  return (
    <div className="App">
      <InputField onInputValueUpdate={inputValueUpdateHandler} />
      {suggestions}
    </div>
  );
}

export default App;
