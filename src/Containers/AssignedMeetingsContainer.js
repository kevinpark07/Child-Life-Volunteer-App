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
    bottom: 5%;
    left: 20%;
    width: 100%;
    overflow: scroll;
`
