import styled from "styled-components";
import React from "react";
import Head from "../components/Head";
import CheckList from "./CheckList";
import JobList from "./JobList";
import JobDesc from "./JobDesc";

function App() {
  return (
    <Container1>
      <Head />
      <Container2>
        <CheckList />
        <JobList />
        <JobDesc />
      </Container2>
    </Container1>
  );
}


const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #15182B ;
  height: 100% ;
  width: 100%;
  position: fixed;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  height: 100% ;
  width: 100%;
`
export default App;
