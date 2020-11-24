import React from './node_modules/react'
import Drawer from './node_modules/@material-ui/core/Drawer'
import Button from './node_modules/@material-ui/core/Button'
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//     drawer: { height: 100 }
// }))

export default function DrawerBottom(props) {
    const [state, setState] = React.useState(false)
    let anchor = 'bottom'
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    // const classes = useStyles()
    return (<>
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>(Splayed Cards Graphic)</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {props.children}
            </Drawer>
        </React.Fragment>
    </>)
}