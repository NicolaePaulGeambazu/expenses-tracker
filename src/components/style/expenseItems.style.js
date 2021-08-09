import styled from "styled-components";

export const ExpensesItem = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  grid-template-columns: 20% 80%;
  display: grid;
  height: 50px;
`;

export const ExpenseDate = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
  border: 1px solid white;
  border-radius: 25px;
  background-color:#336;
  width: 150px;
`;

export const ExpenseDetails = styled.div`
  display: grid;
  grid-template: 80% 20%;
  grid-template-columns: 80% 20%;
`;

export const ExpenseAmount = styled.div`
  border: 1px solid white;
  border-radius: 50px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: mediumpurple;
`;

export const ExpenseTitle = styled.div`
  color: white;
  font-weight: bold;
  margin-top: 15px;
`;

export const Month = styled.div`
padding: 5px;
`
export const Day = styled.div`
padding: 5px;
`
export const Year = styled.div`
padding: 5px;
`
