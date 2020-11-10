import React from 'react';
import VolunteerCard from './VolunteerCard'
import { connect } from 'react-redux';
import styled from 'styled-components';

const BACKGROUND = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

class VolunteerList extends React.Component {

    renderVolunteers = () => {
        // let approvedVolunteers = this.props.volunteers.filter(vol => vol.approved === true)
        return this.props.volunteers.map(vol => <VolunteerCard key={vol.id} volunteer={vol} />)
    }
    
    render () {
    return (
        <div>
            <Background alt="background" src={BACKGROUND} />
            <Container>
                <Header>Volunteer List</Header>
                {this.renderVolunteers()}
            </Container>
        </div>
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

const Background = styled.img`
    width: 100%;
    height: 100%;
    z-index: -1;
`

const Container = styled.div`
    position: absolute;
    top: 15%;
    left: 15%;
    overflow: auto;
    height: 100%;
    opacity: 95%;
    z-index: 1;
    width: 75%;
    border-style: inset;
    box-shadow: 5px 3px 5px 2px grey;
`

const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    text-align: center;
    color: #EFEBE9;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40pt;
    text-decoration: underline;
`