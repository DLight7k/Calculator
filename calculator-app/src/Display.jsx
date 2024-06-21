/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Display = ({text, result}) => {
    return(
        <div className="display">
            <div id="display-result">{result}</div>
            <div id="display-text">{text}</div>
        </div>
    );
}

export default Display