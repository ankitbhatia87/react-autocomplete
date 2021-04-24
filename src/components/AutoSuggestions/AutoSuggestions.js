import classes from './AutoSuggestions.module.css';

const AutoSuggestions = (props) => {
  return (
    <ul className={classes.SuggestionsWrap}>
      {props.selectedSuggestions.map((suggestion) => {
        return <li className={classes.SuggestionsWrap_listItem} key={suggestion.id}>{suggestion.name}</li>;
      })}
    </ul>
  );
};

export default AutoSuggestions;
