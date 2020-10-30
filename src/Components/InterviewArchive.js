import React from 'react';
import { connect } from 'react-redux';
import Interview from './Interview';

class InterviewArchive extends React.Component {

    renderInterviews = () => {
        // let filteredInterviews = this.props.interviews.filter(interview => interview.administrator_id === this.props.user.id)
        return this.props.interviews.map(interview => <Interview key={interview.id} interview={interview} />)
    }
    
    render () {
    return (
        <div>
            {console.log(this.props.interviews)}
            <h1>Archive</h1>
            {this.renderInterviews()}
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