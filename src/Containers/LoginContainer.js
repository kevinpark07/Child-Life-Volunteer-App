import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VolunteerLogin from '../Components/VolunteerLogin';
import AdminLogin from '../Components/AdminLogin';
import LoginHome from '../Components/LoginHome';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const TEDDY_BACKGROUND = "https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1218&q=80"


class LoginContainer extends React.Component {

    state = {
        home: false
    }

    clickHandle = () => {
       this.setState(prevState => ({home: !prevState.home}))
    }

    render () {
        return (
            <div>
                {this.state.home ? <Redirect to='/' /> : null}
                <Background alt="teddy" src={TEDDY_BACKGROUND} />
                <Title>Child Life Volunteer Portal</Title>
                <Home onClick={this.clickHandle} />
                <LoginHome />
                <Switch>
                    <Route path='/login/volunteer' render={ () => <VolunteerLogin />} />
                    <Route path='/login/admin' render={ () => <AdminLogin />} />
                    {/* <Route path={'/login'} render={ () => <LoginHome />} /> */}
                </Switch>
            </div>
        )
    }
}


export default LoginContainer;


const Home = styled(HomeIcon)`
    color: #f44336;
    position: absolute;
    right: 4%;
    top: 6%;
    zoom: 250%;
`
const Background = styled.img`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: - 1;
`
const Title = styled.h1`
    position: absolute;
    right: 13%;
    top: 2%;
    font-family: Chalkduster, fantasy;
    color: #f44336;
    z-index: 1;
    zoom: 150%;
`