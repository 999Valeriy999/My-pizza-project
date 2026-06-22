import React from 'react';
import classNames from 'classnames';

const Button = ({
  onClick, 
  className, 
  disabled, 
  active,
  children = 'Замовити',
  type = 'submit'        
}) => {
  const classes = classNames(
    'btn',
    className,
    { active }
  );

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;