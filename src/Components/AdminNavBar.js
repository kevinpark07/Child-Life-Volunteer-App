import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HistoryIcon from '@material-ui/icons/History';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { signOutUser } from '../Redux/action';
import styled from 'styled-components';


const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    minHeight: 75,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#EFEBE9', 
    opacity: '80%',
    color:"inherit",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


function AdminNavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [archive, setArchive] = useState(false);
  const [profile, setProfile] = useState(false);
  const [dash, setDash] = useState(false);
  const [signOut, setSignOut] = useState(false);
  const [volunteer, setVolunteer] = useState(false);
  const [meeting, setMeeting] = useState(false);

    const profileHandle = () => {
      setProfile(!profile);
      setOpen(false);
    }

    const handleDrawerOpen = () => {
      setOpen(true);
      setProfile(false);
      setDash(false);
      setArchive(false);
      setSignOut(false);
      setVolunteer(false);
      setMeeting(false);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    const dashHandle = () => {
      setDash(!dash);
      setOpen(false);
    }

    const archiveHandle = () => {
        setArchive(!archive);
        setOpen(false);
    }

    const signOutHandle = () => {
        setSignOut(!signOut);
        setOpen(false);
        props.signOutHandle();
    }

    const volunteerHandle = () => {
      setVolunteer(!volunteer);
      setOpen(false);
    }

    const meetingHandle = () => {
      setMeeting(!meeting);
      setOpen(false);
    }

  return (
    <div className={classes.root}>
        {profile ? <Redirect to={`/admin/${props.user.id}`} /> : null}
        {archive ? <Redirect to={'/admin/archive'} /> : null}
        {meeting ? <Redirect to='/admin/meetings' /> : null}
        {dash ? <Redirect to={'/admin'} /> : null}
        {volunteer ? <Redirect to='/admin/roster' /> : null}
        {signOut ? <Redirect to={'/'} /> : null}
        
      <CssBaseline />
      <AppBar
        style={{ background: '#1565C0' }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            variant="dense"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Title>
            Welcome {props.user.name}!
          </Title>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
         <ListItem button onClick={profileHandle}>
             <ListItemIcon>
                 <AccountCircleIcon color="inherit"/>
             </ListItemIcon>
             <ListItemText primary="Profile" color="inherit"/>
         </ListItem>
         <ListItem button onClick={dashHandle}>
             <ListItemIcon>
                 <DashboardIcon color="inherit"/>
             </ListItemIcon>
             <ListItemText primary="Dashboard" color="inherit"/>
         </ListItem>
         <ListItem button onClick={meetingHandle}>
             <ListItemIcon>
                 <MeetingRoomIcon color="inherit"/>
             </ListItemIcon>
             <ListItemText primary="Meet-Ups" color="inherit"/>
         </ListItem>
         <ListItem button onClick={volunteerHandle}>
             <ListItemIcon>
                 <ListIcon color="inherit"/>
             </ListItemIcon>
             <ListItemText primary="Volunteer Roster" color="inherit"/>
         </ListItem>
         <ListItem button onClick={archiveHandle}>
             <ListItemIcon>
                 <HistoryIcon color="inherit"/>
             </ListItemIcon>
             <ListItemText primary="Interview Archive" color="inherit"/>
         </ListItem>
         <ListItem button onClick={signOutHandle} >
             <ListItemIcon>
                 <ExitToAppIcon color="inherit"/>
             </ListItemIcon>
             <ListItemText primary="Sign-Out" color="inherit"/>
         </ListItem>
        </List>
      </Drawer>
   
    </div>
  );
}

const msp = (state) => {
    return { user: state.user }
  }

const mdp = (dispatch) => {
    return {
      signOutHandle: () => dispatch(signOutUser())
    }
  }

export default connect(msp, mdp)(AdminNavBar);

const Title = styled.h2`
  font-family: Chalkduster, fantasy;
`