import classes from './InputField.module.css';

const InputField = props => {
  const handleKeyup = (e) => {
      props.onInputValueUpdate(e.target.value);
  };
  return <input type="text" className={`${classes.input} ${props.isLoadingClass}`} onKeyUp={handleKeyup} />;
};

export default InputField;
