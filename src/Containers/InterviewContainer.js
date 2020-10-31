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
            {console.log(props.interviews)}
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
    bottom: 5%;
    left: 20%;
    width: 100%;
    overflow: scroll;
`
