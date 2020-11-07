import React from 'react';
import {connect} from 'react-redux';
import AssignedMeeting from '../Components/AssignedMeeting';
import styled from 'styled-components';


const AssignedMeetingsContainer = (props) => {

    const renderMeetings= () => {
        let assignedMeetings = props.meetings.filter(meet => meet.notes === null && meet.volunteer_id === props.user.id);

        return assignedMeetings.map(meeting => <AssignedMeeting key={meeting.id} meeting={meeting} />)
     
    }

    return (
        <Container>
            <Header>UPCOMING MEET-UPS</Header>
            {renderMeetings()}
        </Container>
    )

}

const msp = state => {
    return {
        user: state.user,
        meetings: state.meetings
    }
}

export default connect(msp)(AssignedMeetingsContainer);

const Container = styled.div`
    position: absolute;
    top: 16%;
    left: 11%;
    width: 50%;
    padding-bottom: 2%;
    height: 100%;
    overflow: auto;
    opacity: 95%;
    background-color: #C62828;
    border-style: groove;
    border-radius: 5%;
    box-shadow: 10px 10px 5px grey;
`
const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    text-align: center;
    color: #F3BB15;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40pt;
`