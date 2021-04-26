import classes from './AutoSuggestions.module.css';

const AutoSuggestions = (props) => {
  const handleItemClick = e => {
    props.onItemClick(e.currentTarget.innerText)
  }
  return (
    <ul className={classes.SuggestionsWrap}>
      {props.selectedSuggestions.map((suggestion) => {
        return <li className={classes.SuggestionsWrap_listItem} onClick={handleItemClick} key={suggestion.id}>{suggestion.name}</li>;
      })}
    </ul>
  );
};

export default AutoSuggestions;
