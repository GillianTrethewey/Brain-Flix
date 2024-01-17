import './Button.scss';

const Button = (props) => {
  return (
    <Button className={props.btnClassName}>{props.btnLabel}</Button>
  )
}

export default Button;
