import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) => {
    db.ref(`users/${id}`).set({
        username,
        email,
        MDS: Math.floor(Math.random()*10),
        IA: Math.floor(Math.random()*10),
        PAO : Math.floor(Math.random()*10),
        PL :Math.floor(Math.random()*10),
        BD: Math.floor(Math.random()*10),
        Retele : Math.floor(Math.random()*10),
    });

};



export const onceGetUsers = () =>
    db.ref('users').once('value');