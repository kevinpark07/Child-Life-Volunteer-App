import React from 'react';
import { connect } from 'react-redux';
import Interview from '../Components/Interview';
import styled from 'styled-components';

const BACKGROUND = "https://images.unsplash.com/photo-1554104707-a76b270e4bbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

class InterviewArchive extends React.Component {

    renderInterviews = () => {
        // let filteredInterviews = this.props.interviews.filter(interview => interview.administrator_id === this.props.user.id)
        return this.props.interviews.map(interview => <Interview key={interview.id} interview={interview} />)
    }
    
    render () {
    return (

        <div>
            <Background alt="background" src={BACKGROUND} />
            <Container>
                <Header>Archive</Header>
                {this.renderInterviews()}
            </Container>
        </div>
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
    top: 15%;
    left: 15%;
    overflow: auto;
    height: 100%;
    z-index: 1;
    width: 75%;
    border-style: solid;
    border-color: white;
    box-shadow: 5px 5px 5px 2px grey;
`
const Background = styled.img`
    width: 100%;
    height: 100%;
    z-index: -1;
`

const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    text-align: center;
    color: #EFEBE9;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40pt;
    text-decoration: underline;
`