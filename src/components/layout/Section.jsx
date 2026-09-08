export default function Section({ children, className = '', as: Element = 'section', ...props }) {
  return (
    <Element className={`section ${className}`.trim()} {...props}>
      {children}
    </Element>
  );
}
