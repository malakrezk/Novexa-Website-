export default function Container({ children, className = '', ...props }) {
  return (
    <div className={`container ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
