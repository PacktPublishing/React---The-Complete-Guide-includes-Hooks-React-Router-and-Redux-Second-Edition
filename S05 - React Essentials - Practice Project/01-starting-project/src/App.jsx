import Header from "./component/Header.jsx";
import UserInput from "./component/UserInput.jsx";
import {useState} from "react";
import Result from "./component/Result.jsx";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 2000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = userInput.duration > 0;

    function handleChange(inputId, newValue) {
        setUserInput((prevState) => {
            return {
                ...prevState, [inputId]: +newValue
            }
        })
    }

    return (<>
            <Header/>
            <UserInput userInput={userInput} handleUserInput={handleChange}/>
            {inputIsValid ?
                <Result userInput={userInput}/> :
                <p className="center">Please enter a duration greater than 0.</p>
            }
        </>
    )
}

export default App
