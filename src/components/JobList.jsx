import React from 'react';
import styled from "styled-components";
import logo1 from '../assets/logo1.jpg';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpg';
import logo4 from '../assets/logo4.jpg';
import { GoLocation } from 'react-icons/go';
import { MdVerified } from 'react-icons/md';
import { MdOutlineVerified } from 'react-icons/md';


const JobList = () => {
    return (
        <Container>

            <div>
            <Desc1>
                <section>
                    <img src={logo1} alt="logo1" />
                </section>
                <div>
                    <h1>Frontend Developer</h1>
                    <h3><GoLocation/>Remote - United States</h3>
                </div>
            </Desc1>
            
            <Desc2>
                    <div>
                    <button>Frontend</button>
                    <button>Webdev</button>
                    </div>
                    <h3><MdVerified/> Payment Verified</h3>
            </Desc2>
            </div>

            <div>
            <Desc1>
                <section>
                    <img src={logo2} alt="logo2" />
                </section>
                <div>
                    <h1>Product Designer</h1>
                    <h3><GoLocation/>Remote - U.K.</h3>
                </div>
            </Desc1>
            
            <Desc2>
                    <div>
                    <button>Frontend</button>
                    <button>Design</button>
                    </div>
                    <h3><MdOutlineVerified/> Payment Unverified</h3>
            </Desc2>
            </div>

            <div>
            <Desc1>
                <section>
                    <img src={logo3} alt="logo3" />
                </section>
                <div>
                    <h1>Backend Developer needed</h1>
                    <h3><GoLocation/>New York - United States</h3>
                </div>
            </Desc1>
            
            <Desc2>
                    <div>
                    <button>Backend</button>
                    <button>DB</button>
                    </div>
                    <h3><MdOutlineVerified/> Payment Unverified</h3>
            </Desc2>
            </div>

            <div>
            <Desc1>
                <section>
                    <img src={logo4} alt="logo4" />
                </section>
                <div>
                    <h1>Frontend Sr.</h1>
                    <h3><GoLocation/>Remote - Argentina</h3>
                </div>
            </Desc1>
            
            <Desc2>
                    <div>
                    <button>Frontend</button>
                    <button>Sr</button>
                    </div>
                    <h3><MdVerified/> Payment Verified</h3>
            </Desc2>
            </div>

        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 30%;

    div{
        margin-bottom: 10px;
        border-radius: 15px;
        background-color: #1F273A;
        color: #EFF4FA;
    }
`

const Desc1 = styled.div`
    display: flex;
    padding: 10px;

    h1{
        font-weight: 600;
        font-size: 25px;
    }
    h3{
        font-weight: 300;
        color: #AEB0BD;
        font-size: 17px;
    }
    img{
        width: 4rem;
        border-radius: 10px;
        margin-right: 10px;
    }
`

const Desc2 = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
    align-items: center;

    button{
        border-radius: 5px;
        background-color: #15182B;
        padding: 10px;
        margin-right: 10px;
        color: #EFF4FA;
        border: none;
        cursor: pointer;
    }
`



export default JobList