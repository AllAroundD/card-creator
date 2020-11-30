import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as ViewInventory } from '../card-splay-plain.svg'

const drawerHeight = '30%'

const useStyles = makeStyles(theme => ({
    drawer: { height: drawerHeight },
    drawerPaper: { height: drawerHeight }
}))

export default function DrawerBottom(props) {
    const [state, setState] = React.useState(false)
    let anchor = 'bottom'
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const classes = useStyles()
    return (<>
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><ViewInventory width='50px' height='50px' /></Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
                {props.children}
            </Drawer>
        </React.Fragment>
    </>)
}