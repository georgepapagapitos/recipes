import classNames from 'classnames';
import React from 'react';
import './typography.scss';

const typographyMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
};

const Typography = (props) => {
  const { variant, component, className, onClick, gutterBottom, children } = props;

  const Element = component ? typographyMap[component] : 'p';

  const typographyClasses = classNames(className, {
    [`typography--${variant ? variant : component}`]: true,
    'gutter-bottom': gutterBottom,
  });

  return (
    <Element className={typographyClasses} onClick={onClick}>
      {children}
    </Element>
  );
};

export default Typography;
