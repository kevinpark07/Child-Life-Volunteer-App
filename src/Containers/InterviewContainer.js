import React from 'react';
import {connect} from 'react-redux';
import InterviewCard from '../Components/InterviewCard';
import styled from 'styled-components';


const InterviewContainer = (props) => {

    const renderInterviews = () => {
        let availInterviews = props.interviews.filter(int => int.notes === null || int.notes === "")

        return availInterviews.map(interview => <InterviewCard key={interview.id} interview={interview} />)
     
    }

    return (
        <Container>
            <Header>Pending Interviews</Header>
            {renderInterviews()}
        </Container>
    )

}

const msp = state => {
    return {
        user: state.user,
        interviews: state.interviews
    }
}

export default connect(msp)(InterviewContainer);

const Container = styled.div`
    position: absolute;
    top: 16%;
    left: 11%;
    width: 50%;
    padding-bottom: 2%;
    height: 78%;
    overflow: auto;
    opacity: 95%;
    background-color: #1565C0;
    border-style: groove;
    border-radius: 2%;
    box-shadow: 5px 5px 5px grey;
    margin-bottom: 5%;
`

const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    text-align: center;
    color: #F3BB15;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40pt;
`
