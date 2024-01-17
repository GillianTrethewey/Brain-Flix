import './Button.scss';

const Button = (props) => {
  return (
    <button className={props.btnClassName}>{props.btnLabel}</button>
  )
}

export default Button;
