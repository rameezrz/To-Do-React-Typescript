type Button = {
  children: JSX.Element | string;
  className?: string;
  onClick?: ()=> void;
};

const Button = ({ children, className, onClick }: Button) => {
  return <button className={className} onClick={onClick}>{children}</button>;
};

export default Button;
