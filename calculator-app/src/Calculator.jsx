/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState} from 'react'
import Display from "./Display";
import Button from "./Button";

const Calculator = () => {

	const [text, setText] = useState("");
	const [result, setResult] = useState("");

	const addToText = (val) => {
		setText((text) => [...text, val + ""]);
	}

	const calculateResult = () => {
		const input = text.join("");
		
		setResult(eval(input));
	}

	const resetInput = () => {
		setText("");
		setResult("");
	}

	const deleteInput = (val) => {
		setText([...text].slice(0, -1));
	}
	return(
		<body>
			<div className="calculator">
				<Display text={text} result={result}/>
				<div className="button-grid">
					<Button icon="C" value="C" handleClick={resetInput}/>
					<Button icon="del" value="del" handleClick={deleteInput}/>
					<Button icon="%" value="%" handleClick={addToText}/>
					<Button icon="/" value="/" handleClick={addToText}/>
					<Button icon="7" value="7" handleClick={addToText}/>
					<Button icon="8" value="8" handleClick={addToText}/>
					<Button icon="9" value="9" handleClick={addToText}/>
					<Button icon="*" value="*" handleClick={addToText}/>
					<Button icon="4" value="4" handleClick={addToText}/>
					<Button icon="5" value="5" handleClick={addToText}/>
					<Button icon="6" value="6" handleClick={addToText}/>
					<Button icon="-" value="-" handleClick={addToText}/>
					<Button icon="1" value="1" handleClick={addToText}/>
					<Button icon="2" value="2" handleClick={addToText}/> 
					<Button icon="3" value="3" handleClick={addToText}/>
					<Button icon="+" value="+" handleClick={addToText}/>
					<Button icon="0" value="0" handleClick={addToText}/>
					<Button icon="." value="." handleClick={addToText}/>
					<Button icon="=" value="=" handleClick={calculateResult}/>
				</div>	
			</div>
		</body>	
	);
}

export default Calculator