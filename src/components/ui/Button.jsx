import './Button.css';

export default function Button({ children, className = '', variant = 'primary', as: Element = 'button', ...props }) {
  return (
    <Element className={`button button--${variant} ${className}`.trim()} {...props}>
      {children}
    </Element>
  );
}
