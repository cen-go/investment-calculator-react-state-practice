import { formatter } from "../util/investment";

export default function Results({ tableData }) {
  const tableRows = tableData.map((yearData) => {
    const { year, interest, valueEndOfYear, investedCapital, totalInterest } =
      yearData;
    return (
      <tr key={year}>
        <td>{year}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(investedCapital)}</td>
      </tr>
    );
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}
