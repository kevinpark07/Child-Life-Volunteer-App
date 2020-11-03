import React from 'react';
import {connect} from 'react-redux';
import MeetingCard from '../Components/MeetingCard';
import styled from 'styled-components';


const VolMeetingContainer = (props) => {

    const renderMeetings = () => {
        let userMeetings = props.meetings.filter(meet => meet.volunteer_id === props.user.id)

        return userMeetings.map(meeting => <MeetingCard key={meeting.id} meeting={meeting} />)
     
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

export default connect(msp)(VolMeetingContainer);

const Container = styled.div`
    position: absolute;
    top: 20%;
    left: 20%;
    width: 100%;
    overflow: scroll;
`