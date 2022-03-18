import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import portrait from '../assets/portrait.png'
import { AiOutlineDown } from 'react-icons/ai';

const Head = () => {
  return (
    <Container>
        <Logo>
            <img src={logo} alt='logo'/>
            <h1>WorkFile</h1>
        </Logo>

        <SelectJob>
            <h3>Find a Job</h3>
            <h3>Submit a Job</h3>
            <h3>Sponsor Us</h3>
        </SelectJob>

        <Profile>
            <img src={portrait} alt='portrait'/>
            <h3>Arian Dedier</h3>
            <div><AiOutlineDown/></div>
        </Profile>

    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100% ;
    margin-top: 50px;
    margin-left: 100px ;
    margin-right: 100px;
    gap:500px;
`

const Logo = styled.div`
    display: flex;
    gap:10px;
    align-items: center;
    justify-content: center ;

    img{
        height: 2rem;
    }
    h1{
        font-weight: 700;
        color: #EFF4FA;
        cursor: pointer;
    }
`

const SelectJob = styled.div`
    display: flex ;
    justify-self: center;
    align-self: center;
    gap:35px;
    width: 100% ;

    h3{
        color: #AEB0BD;
        font-weight: 300;
        cursor: pointer;
    }
`
const Profile = styled.div`
    display: flex;
    color: #EFF4FA;
    width: 100% ;
    align-self: center;
    gap: 10px;

    div{
        display: flex;
        justify-self: center;
        align-self: center;
        cursor: pointer;
    }

    img{
        width: 3rem;
    }

    h3{
        font-weight: 600;
        color: #EFF4FA;
        justify-self: center;
        align-self: center;
        cursor: pointer;
    }
`

export default Head