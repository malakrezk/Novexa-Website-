import { forwardRef } from 'react';
import './Section.css';

const Section = forwardRef(function Section({ children, className = '', as: Element = 'section', ...props }, ref) {
  return (
    <Element ref={ref} className={`section ${className}`.trim()} {...props}>
      {children}
    </Element>
  );
});

export default Section;
