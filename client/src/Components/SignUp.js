import React from 'react'
import PropTypes from "prop-types";
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { ProfileActions } from '../actions/profile';

const initialState = {
    user: {
        username: ''
    },
    submitted: false
}

function SignUp (props){

    const [userInfo, setUserInfo] = React.useState(initialState)

    
    const inputChange = (event) => {
        console.log([event, event.target, userInfo])
        const { name, value } = event.target;
        const user = userInfo.user;
        user[name] = value
        setUserInfo({ ...userInfo, user });
    }

    const submitForm = async (e) => {
        setUserInfo({
            ...userInfo,
            submitted: true,
            // [e.target.name]: e.target.value,
        })
        const user = userInfo.user
        // if (user && props.profile) {
        //     user.profileImage = props.profile.profileImage
        // }
        e.preventDefault()
        
        props.dispatch(ProfileActions.addProfile(user));
        props.history.push('/confirm')
    }

    return (
        <div className="rightPanel">
          <div className="row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10 mb-2">
              <input type="text" value={userInfo.user.username} name="username" onChange={(e) => { inputChange(e)} } className="form-control" placeholder="Username" />
              { userInfo.submitted && this.state.errors.user.username.length > 0 &&  <span className='error'>{this.state.errors.user.username}</span>}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 mb-2">
            </div>
            <div className="col-sm-4">
              <button type="button" className="button" onClick={submitForm}>Submit</button>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
    )
}

SignUp.propTypes = {
    profile: PropTypes.object.isRequired,
  };

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }   
}


export default connect(mapStateToProps)(withRouter(SignUp))
