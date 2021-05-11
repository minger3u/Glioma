import React from 'react';

function SignIn(props){
    return(
        <div>
            {this.props.isconnected ? 'connecté' : 'pas co'}
        </div>
    )
}

export default SignIn;