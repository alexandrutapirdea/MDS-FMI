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
                        <h1>Account: {authUser.email}</h1>
                        {/*<h1>UID: {authUser.uid}</h1>*/}
                        <h1>Nota IA : {valoriUser.IA}</h1>
                        <h1>Nota PAO : {valoriUser.PAO}</h1>
                        <h1>Nota PL : {valoriUser.PL}</h1>
                        <h1>Nota BD : {valoriUser.BD}</h1>
                        <h1>Nota MDS : {valoriUser.MDS}</h1>
                        <h1>Nota Retele : {valoriUser.Retele}</h1>

                        <PasswordForgetForm/>
                        <PasswordChangeForm/>

                    </div>
                }
            </AuthUserContext.Consumer>
            )}
    }
//
// const AccountPage = () =>
//     <AuthUserContext.Consumer>
//         {authUser =>
//             <div>
//                 <h1>Account: {authUser.email}</h1>
//                 {console.log(authUser)}
//                 <PasswordForgetForm />
//                 <PasswordChangeForm />
//             </div>
//         }
//     </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);

