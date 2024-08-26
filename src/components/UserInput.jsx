export default function UserInput({ onInputChange, inputState }) { 

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
          <input
            type="number"
            value={inputState.initialInvestment}
            onChange={onInputChange}
            id="initialInvestment"
            required
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={inputState.annualInvestment}
            onChange={onInputChange}
            id="annualInvestment"
            required
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            value={inputState.expectedReturn}
            onChange={onInputChange}
            id="expectedReturn"
            required
          />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            value={inputState.duration}
            onChange={onInputChange}
            id="duration"
            required
          />
        </div>
      </div>
    </section>
  );
}
