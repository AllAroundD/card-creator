import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box'
import { Home } from '@material-ui/icons'
import { ReactComponent as AddCardIcon } from '../add-card-plain.svg'
import { ReactComponent as AddDeckIcon } from '../add-deck-plain.svg'
import { Switch, Route, Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
//
const Actions = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} display='flex' flexDirection='column' position='fixed' top='0' left='0'>
      <Switch>
        <Route exact path='/'>
          <Link to='/cardcreate'>
            <Fab color="primary">
              <Tooltip title="Create Card" arrow >
                <AddCardIcon width='40%' height='100%' />
              </Tooltip>
            </Fab>
          </Link>
          <Link to='/deckcreate'>
            <Fab color='primary'>
              <Tooltip title="Create Deck" arrow >
                <AddDeckIcon width='70%' height='100%' />
              </Tooltip>
            </Fab>
          </Link>
        </Route>
        <Route path='/cardedit'>
          <Link to='/'>
            <Fab color='primary'>
              <Home width='100%' height='100%' style={{ color: '#777' }} />
            </Fab>
          </Link>
        </Route>
        <Route path='/deckedit'>
          <Link to='/'>
            <Fab color='primary'>
              <Home width='100%' height='100%' style={{ color: '#777' }} />
            </Fab>
          </Link>
        </Route>
      </Switch>
    </Box>
  );
}


export default Actions