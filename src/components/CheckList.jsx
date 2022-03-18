import React from 'react'
import styled from 'styled-components'

const CheckList = () => {
  return (
    <Container>
        <ul>
            <h1>Location</h1>
            <li><input type="checkbox"/> Remote</li>
            <li><input type="checkbox"/> United States</li>
            <li><input type="checkbox"/> India</li>
            <li><input type="checkbox"/> Canada</li>
            <li><input type="checkbox"/> Australia</li>
            <li><input type="checkbox"/> Poland</li>
        </ul>

        <ul>
            <h1>Payment</h1>
            <li><input type="checkbox"/> Verified</li>
            <li><input type="checkbox"/> Unverified</li>
        </ul>

        <ul>
            <h1>Level</h1>
            <li><input type="checkbox"/> Entry</li>
            <li><input type="checkbox"/> Intermediate</li>
            <li><input type="checkbox"/> Expert</li>
        </ul>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #15182B;
    height: 80% ;
    margin-top: 20px;
    margin-left: 100px ;
    margin-right: 100px;

    ul{
        margin-top: 30px;

    }
    input{
        border: none;
        outline: none;
        
    }

    h1{
        font-size: 25px;
        font-weight: 600;
        color: #EFF4FA;
        
    }

    li{
        list-style-type: none;
        margin-top: 10px;
        font-size: 17px;
        font-weight: 300;
        color: #AEB0BD;
    }
`

export default CheckList