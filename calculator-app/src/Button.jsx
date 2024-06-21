/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Button = ({icon, value, handleClick}) => {
    return(
        <div className="button" onClick={() => handleClick(icon)}>
            <div className="icon">
                {icon}
            </div>
        </div>
    );
}

export default Button