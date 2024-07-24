
import Input from "./Input.jsx";
export default function Entries({userInput, setUserInput}) {
    const {initialInvestment, annualInvestment, expectedReturn, duration } = userInput
    return(
        <div id="user-input">
            <div className="input-group">
                <Input name="initial-investment" typeOfInvestment={initialInvestment} setUserInput={setUserInput}/>
                <Input name="annual-investment" typeOfInvestment={annualInvestment} setUserInput={setUserInput}/>
            </div>
            <div className="input-group">
                <Input name="expected-return" typeOfInvestment={expectedReturn} setUserInput={setUserInput}/>
                <Input name="duration" typeOfInvestment={duration} setUserInput={setUserInput}/>
            </div>
        </div>
    );
}