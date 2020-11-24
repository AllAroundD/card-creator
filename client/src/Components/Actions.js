import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Fab from './node_modules/@material-ui/core/Fab';
import Box from './node_modules/@material-ui/core/Box'
import { ReactComponent as AddCardIcon } from '../add-card-plain.svg'
import { ReactComponent as AddDeckIcon } from '../add-deck-plain.svg'

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
      <Fab color="primary">
        <AddCardIcon width='40%' height='100%' />
      </Fab>
      <Fab color='primary'>
        <AddDeckIcon width='70%' height='100%' />
      </Fab>
    </Box>
  );
}


export default Actions