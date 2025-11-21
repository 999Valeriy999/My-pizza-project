import classname from "classnames";

const Button = ({
 onClick, className, disabled, active,
}) => {
const classes = classname(
'btn',
className,
{active},
);
    return (
        <button>
        className={classes}
        disabled={disabled}
        onClick={onClick}
        </button>
    );
};

Button.defaultProps = {
    children: 'Default button',
    className: '',
    disabled: false,
    active: false, 
};

export default Button;