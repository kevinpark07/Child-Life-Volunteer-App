import React from 'react';
import VolunteerCard from './VolunteerCard'
import { connect } from 'react-redux';
import styled from 'styled-components';


class VolunteerList extends React.Component {

    renderVolunteers = () => {
        let approvedVolunteers = this.props.volunteers.filter(vol => vol.approved === true)
        return approvedVolunteers.map(vol => <VolunteerCard key={vol.id} volunteer={vol} />)
    }
    
    render () {
    return (
        <Container>
            <h1>Volunteer List</h1>
            {this.renderVolunteers()}
        </Container>
    )
    }
}

const msp = (state) => {
    return {
        volunteers: state.volunteers,
        user: state.user 
    }
}

export default connect(msp, null)(VolunteerList);

const Container = styled.div`
    position: absolute;
    top: 20%;
    left: 20%;
    width: 100%;
    overflow: scroll;
`