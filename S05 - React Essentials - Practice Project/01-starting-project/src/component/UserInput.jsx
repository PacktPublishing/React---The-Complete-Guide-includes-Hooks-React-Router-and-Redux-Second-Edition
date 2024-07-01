export default function UserInput({userInput, handleUserInput}) {

    return (<section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Input Investment</label>
                    <input type="number"
                           required
                           value={userInput.initialInvestment}
                           onChange={(event) => handleUserInput("initialInvestment", event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number"
                           required
                           value={userInput.annualInvestment}
                           onChange={(event) => handleUserInput("annualInvestment", event.target.value)}/>
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number"
                           required
                           value={userInput.expectedReturn}
                           onChange={(event) => handleUserInput("expectedReturn", event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number"
                           required
                           value={userInput.duration}
                           onChange={(event) => handleUserInput("duration", event.target.value)}/>
                </p>
            </div>
        </section>);
}