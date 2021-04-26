import { useState } from "react";
import "./App.css";
import AutoSuggestions from "./components/AutoSuggestions/AutoSuggestions";
import InputField from "./components/InputField/InputField";

const DEBOUNCE_DELAY = 500;
let timeout = undefined;
function App() {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputValueUpdateHandler = (updatedInputValue) => {
    clearTimeout(timeout);
    timeout = undefined;
    timeout = setTimeout(() => {
        getData(updatedInputValue);
    }, DEBOUNCE_DELAY)
  };

  const getData = (updatedInputValue) => {
    setIsLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${updatedInputValue}`
    )
      .then((response) => response.json())
      .then((data) => setFilteredSuggestions([...data]))
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err));
  };

  const itemClickHandler = clickedItem => {
    alert(`selected: ${clickedItem}`);
  }

  let suggestions = filteredSuggestions.length > 0 && (
    <AutoSuggestions selectedSuggestions={filteredSuggestions} onItemClick={itemClickHandler} />
  );

  let isLoadingClass = (isLoading) ? 'is-loading' : null;

  return (
    <div className="App">
      <InputField onInputValueUpdate={inputValueUpdateHandler} isLoadingClass={isLoadingClass} />
      {suggestions}
    </div>
  );
}

export default App;
