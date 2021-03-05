import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const { handleLogout, user } = props;
    const { id, name, email, exp } = user;
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now

    // make condition that compairs the two 
    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please log back in to continue.');
    }

    const userData = user ? 
    (<div>
        <h1>Profile</h1>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>id: {id}</div>
    </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div className="text-center pt-4">
            {user ? userData : errorDiv()}
        </div>
    );

}

export default Profile;