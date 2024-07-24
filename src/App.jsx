
import Header from "./components/Header";
import Entries from "./components/Entries.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";
import Results from "./components/Results.jsx";
function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment : 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
  });

  const resultValue = userInput.duration >= 1;
  return (
      <main>
        <h1>React Investment Calculator</h1>
        <Header />
        <Entries userInput={userInput} setUserInput={setUserInput}/>
          {resultValue && <Results results={userInput}/>}
          {!resultValue && <p className={"center"}>Please enter a duration greater than zero</p>}
      </main>
  );
}

export default App
