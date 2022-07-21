import React from "react";
import styled from "styled-components";
import { IDay } from "../App.types";
import { celcius, getCelcius, getModeValue } from "../utils/helpers";

const StyledSummary = styled.div``;

interface ISummary {
  resolvedAddress: string;
  description: string;
  days: IDay[] | [];
}

interface IFrequency {
  [number: number]: number;
}

const Summary: React.FC<ISummary> = ({
  resolvedAddress,
  description,
  days,
}): JSX.Element => {
  const temp = days.map((day) => day.temp);
  const tempSortedIncreasingly = temp?.sort((a, b) => a - b);
  const meanTemp = getCelcius(temp.reduce((a, b) => a + b, 0) / temp.length);
  const lastNum = tempSortedIncreasingly.length - 1;
  const maxTemp = getCelcius(tempSortedIncreasingly[lastNum]);
  const minTemp = getCelcius(tempSortedIncreasingly[0]);
  const modeTemp = getCelcius(getModeValue(temp));

  return (
    <StyledSummary className="Summary">
      <div className="summary-header">
        <h1>{resolvedAddress}</h1>
        <p>{description}</p>
      </div>
      <div className="summary-statistics"></div>
      <div>
        <h3>Mean temperature</h3>
        <span>
          {meanTemp} {celcius}
        </span>
      </div>
      <div>
        <h3>Mode temperature</h3>
        <span>
          {modeTemp} {celcius}
        </span>
      </div>
      <div>
        <h3>Min temperature</h3>
        <span>
          {minTemp} {celcius}
        </span>
      </div>
      <div>
        <h3>Max temperature</h3>
        <span>
          {maxTemp} {celcius}
        </span>
      </div>
    </StyledSummary>
  );
};

export default Summary;
