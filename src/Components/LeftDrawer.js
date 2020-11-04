import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box'

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

const LeftDrawer = () => {
    const classes = useStyles();

    return (
    <Box className={classes.root} display='flex' flexDirection='column' position='fixed' top='0' left='0'>
        <Fab color="primary" aria-label="add-card">
            <AddIcon />
        </Fab>
        <Fab color='primary' aria-label='add-deck'>
            <AddIcon />
        </Fab>
    </Box>
    );
}


export default LeftDrawer