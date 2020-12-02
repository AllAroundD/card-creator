import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box'
import { Home } from '@material-ui/icons'
import { ReactComponent as AddCardIcon } from '../add-card-plain.svg'
import { ReactComponent as AddDeckIcon } from '../add-deck-plain.svg'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Fab color="primary">
            <AddCardIcon width='40%' height='100%' />
          </Fab>
          <Fab color='primary'>
            <AddDeckIcon width='70%' height='100%' />
          </Fab>
        </Route>
        <Route path='/cardedit'>
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