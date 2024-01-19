import './Button.scss';

const Button = (props) => {
  return (
    <button className={props.btnClassName} type={props.btnType}>{props.btnLabel}</button>
  )
}

export default Button;
