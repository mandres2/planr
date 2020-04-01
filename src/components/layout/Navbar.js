import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    //console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper cyan accent-4">
            <div className="container">
                <Link to = '/' className ="brand-logo">Planr</Link>
                { auth.isLoaded && links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    // Testing functionality:
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);