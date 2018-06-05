import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import * as routes from "../constants/routes";
import { Link } from 'react-router-dom';
class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
        };
    }

    componentDidMount() {
        db.onceGetUsers().then(snapshot =>
            this.setState(() => ({ users: snapshot.val() }))
        );
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <h1>Home</h1>
                <p>Aici poti gasi informatii referitoare la grupa si seria ta</p>
                { !!users && <UserByEmail users={users} /> }

            </div>
        );
    }
}

// const UserList = ({ users }) =>
//     <div>
//         <h2>List of Usernames of Users</h2>
//         <p>(Saved on Sign Up in Firebase Database)</p>
//         {Object.keys(users).map(key =>
//             <div key={key}>{users[key].username}</div>
//
//         )}
//         { console.log(users)}
//
//     </div>;

const UserByEmail = ({ users }) =>


    <div>
        <span>Poti vizualiza informatii in</span> <Link to={routes.ACCOUNT}>pagina ta</Link>
        <h2>Colegi care folosesc myFMI</h2>
        {Object.keys(users).map(key =>
            <div key={key}>{users[key].username}</div>
        )}
    </div>;

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);