import React from 'react';
import styled from "styled-components";
import { MdVerified } from 'react-icons/md';

const JobDesc = () => {
  return (
    <Container>
        <Desc1>
            <div>
            <h1>Frontend Developer</h1>
            <h3>Remote - United States</h3>
            </div>

            <div>
                <h4>
                    Posted 2 days ago
                </h4>
            </div>
        </Desc1>
        <Desc2>
            <div>
                <p>
                    <h1>Experience</h1>
                    <h3>Intermediate</h3>
                </p>
                <p>
                    <h1>Location</h1>
                    <h3>United States</h3>
                </p>
                <p>
                    <h1>Salary</h1>
                    <h3>$90 - $130 / hr</h3>
                </p>
            </div>
        </Desc2>
        <Desc3>
            <div>
                <h1>Company Overview</h1>
            </div>
            <p>
            FlameFox is an experienced and passionate group of designers,<br/>
            developers, project managers, writers and artists. Every client we work with becomes<br/>
            a part of the team. Together we face the challenges and celebrate the victories.
            </p>
        </Desc3>
        <Reqs>
            <div>
                <h1>Job Requirements</h1>
                <h3><MdVerified/> 2 Years of professional working experience.</h3>
                <h3><MdVerified/> Understanding of React and Angular.</h3>
                <h3><MdVerified/> Knowledge of React tools including Webpack, Redux, and Flux.</h3>
                <button>Apply to job</button>
            </div>
        </Reqs>
    </Container>
  )
}


const Container = styled.div`
    background-color: #1F273A;
    margin-top: 50px;
    margin-left: 10px;
    border-radius: 10px;
    width: 40%;
    height: 93%;
`
const Desc1 = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px;

    h1{
        color: #EFF4FA;
        font-weight: 600;
    }

    h3{
        color: #AEB0BD;
        font-weight: 300;
    }

    h4{
        color: #EFF4FA;
        font-weight: 300;
    }
`

const Desc2 = styled.div`
    background-color: #15182B;
    display: flex;
    flex-direction: column;
    margin: 20px;
    border-radius: 10px;

    div{    
        padding: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        h1{
            color: #EFF4FA;
            font-weight: 600;
            font-size: 20px;
        }
        h3{
            color: #AEB0BD;
            font-weight: 300;
    }
    }
`

const Desc3 = styled.div`
    padding: 20px;
    margin-left: 20px;

    h1{
            color: #EFF4FA;
            font-weight: 600;
            font-size: 20px;
    }
    p{
            margin-top: 10px;
            color: #AEB0BD;
            font-weight: 300;
    }
`

const Reqs = styled.div`
    padding: 20px;
    margin-left: 20px;

    button{
        margin-top: 50px;
        margin-left: 570px;
        padding: 30px;
        background-color: #075AF6;
        border-radius: 10px;
        border: none;
        color: #EFF4FA;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
    }
    h1{
            color: #EFF4FA;
            font-weight: 600;
            font-size: 20px;
    }
    h3{
            margin-top: 10px;
            color: #AEB0BD;
            font-weight: 300;
    }
`

export default JobDesc