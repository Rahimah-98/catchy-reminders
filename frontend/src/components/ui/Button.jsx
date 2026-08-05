const Button = ({ children,className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`group card outline-card btn-primary flex items-center justify-center gap-2 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
