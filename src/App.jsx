import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleInputChange(event) {
    setInputData((prevInputData) => {
      const UpdatedData = {
        ...prevInputData,
        [event.target.id]: Number(event.target.value),
      };
      return UpdatedData;
    });
  }

  const annualData = calculateInvestmentResults(inputData);
  const { duration } = inputData;
  const warningMessage = (
    <h3 className="warning-message">
      Please enter a duration more than or equal to one year!
    </h3>
  );

  return (
    <>
      <Header />
      <main>
        <UserInput onInputChange={handleInputChange} inputState={inputData} />
        {duration < 1 && duration ? warningMessage : <Results tableData={annualData} />}
      </main>
    </>
  );
}

export default App;
