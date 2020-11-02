import React from 'react';
import { connect } from 'react-redux';
import Interview from './Interview';
import styled from 'styled-components';

class InterviewArchive extends React.Component {

    renderInterviews = () => {
        // let filteredInterviews = this.props.interviews.filter(interview => interview.administrator_id === this.props.user.id)
        return this.props.interviews.map(interview => <Interview key={interview.id} interview={interview} />)
    }
    
    render () {
    return (
        <Container>
            <h1>Archive</h1>
            {this.renderInterviews()}
        </Container>
    )
    }
}

const msp = (state) => {
    return {
        interviews: state.interviews,
        user: state.user 
    }
}

export default connect(msp, null)(InterviewArchive);

const Container = styled.div`
    position: absolute;
    top: 20%;
    left: 20%;
    width: 100%;
    overflow: scroll;
`