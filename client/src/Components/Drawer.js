import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'

export default (props) => {
    const [state, setState] = React.useState(false)
    let anchor = 'bottom'
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (<>
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>(Splayed Cards Graphic)</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {props.children}
            </Drawer>
        </React.Fragment>
    </>)
}