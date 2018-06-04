import React, {Component} from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import firebase from 'firebase/app';

let valoriUser ={};
class AccountPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
        }; }

    componentDidMount() {
        db.onceGetUsers().then(snapshot =>
            this.setState(() => ({ users: snapshot.val() }))

        );

    }

        render()
        {
            const userUid = firebase.auth().currentUser.uid;

           // console.log("valori", firebase.database().ref('/users').child(userUid));
            firebase.database().ref('/users').child(userUid).once('value', function(snap){
            //console.log("Obiectul nostru contine", snap.val());
                valoriUser = snap.val();
        });
            const { users } = this.state;
            for (let key in users){
            }

            return (
            <AuthUserContext.Consumer>
                {authUser =>
                    <div>
                        {Object.keys(valoriUser).map(key =>
                            <h1 key={key}>{key} : {valoriUser[key]}</h1>
                        )}
                        <PasswordForgetForm/>
                        <PasswordChangeForm/>

                    </div>
                }
            </AuthUserContext.Consumer>
            )}
    }

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);

