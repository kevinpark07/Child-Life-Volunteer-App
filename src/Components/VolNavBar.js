import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signOutUser} from '../Redux/action'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
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


function VolNavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [signOut, setSignOut] = useState(false);
  const [meeting, setMeeting] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setProfile(false);
    setDashboard(false);
    setSignOut(false);
    setMeeting(false)
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const profileRedirect = () => {
    setProfile(!profile);
    setOpen(false);
  }

  const dashboardRedirect = () => {
    setDashboard(!dashboard);
    setOpen(false);
  }

  const signOutHandle = () => {
    setSignOut(!signOut);
    setOpen(false);
    props.signOutHandle();
  }

  const meetingRedirect = () => {
    setMeeting(!meeting);
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      {meeting ? <Redirect to={`/volunteer/${props.user.id}/meetings`} /> : null }
      {profile ? <Redirect to={`/volunteer/${props.user.id}`} /> : null }
      {dashboard ? <Redirect to={"/volunteer"} /> : null }
      {signOut ? <Redirect to={"/"} /> : null }
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome {props.user.name}!
          </Typography>
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
         <ListItem button onClick={profileRedirect}>
             <ListItemIcon>
                 <AccountCircleIcon />
             </ListItemIcon>
             <ListItemText primary="Profile" />
         </ListItem>
         <ListItem button onClick={dashboardRedirect}>
             <ListItemIcon>
                 <DashboardIcon />
             </ListItemIcon>
             <ListItemText primary="Dashboard" />
         </ListItem>
         {props.user.approved ? 
         <ListItem button onClick={meetingRedirect}>
             <ListItemIcon>
                 <MeetingRoomIcon />
             </ListItemIcon>
             <ListItemText primary="Meet-Ups" />
         </ListItem> 
         :
         null
         }
         <ListItem button onClick={signOutHandle} >
             <ListItemIcon>
                 <ExitToAppIcon />
             </ListItemIcon>
             <ListItemText primary="Sign-Out" />
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

export default connect(msp, mdp)(VolNavBar);