<<<<<<< HEAD
function Button() {
return ( 
<button type="submit">Замовити</button>
=======
import classname from "classnames";
const Button = ({
 onClick, className, disabled, active,
}) => {
const classes = classname(
'btn',
className,
{active},
>>>>>>> dbbcf459f20eb6b4403fec5c0794a83adc2402a1
);
}
export default Button;
 