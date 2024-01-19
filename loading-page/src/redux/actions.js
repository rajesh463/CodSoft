import * as types from "./actionTypes";

import {auth,googleAuthProvider} from '../firebase';

import AdminData from '../api/AdminInfo';

const registerStart = () =>({
    type:types.REGISTER_START,
});

const registerSuccess = (user) =>({
    type:types.REGISTER_SUCCESS,
    payload:user
});

const registerFail = (error) =>({
    type:types.REGISTER_FAIL,
    payload:error
});
//login
const loginStart = () =>({
    type:types.LOGIN_START,
});

const loginSuccess = (user) =>({
    type:types.LOGIN_SUCCESS,
    payload:user
});

const loginFail = (error) =>({
    type:types.LOGIN_FAIL,
    payload:error
});
//logout
const logoutStart = () =>({
    type:types.LOGOUT_START,
});

const logoutSuccess = () =>({
    type:types.LOGOUT_SUCCESS,
});

const logoutFail = (error) =>({
    type:types.LOGOUT_FAIL,
    payload:error
});

const adminlogoutStart = () =>({
    type:types.LOGOUT_START,
});

const adminlogoutSuccess = () =>({
    type:types.LOGOUT_SUCCESS,
});

const adminlogoutFail = (error) =>({
    type:types.ADMIN_LOGOUT_FAIL,
    payload:error
});

const adminloginStart = () =>({
    type:types.ADMIN_LOGIN_START,
});

const adminloginSuccess = (user) =>({
    type:types.ADMIN_LOGIN_SUCCESS,
    payload:user
});

const adminloginFail = (error) =>({
    type:types.ADMIN_LOGIN_FAIL,
    payload:error
});

export const setUser = (user) =>({
    type:types.SET_USER,
    payload:user,
})
export const setAdmin = (state) =>({
    type:types.ADMIN,
    payload:state,
})

export const setAdminData =(admin)=>({
    type:types.SET_ADMIN,
    payload:admin
})

//GOOGLE SIGN IN 

const googleSignInStart = () =>({
    type:types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) =>({
    type:types.GOOGLE_SIGN_IN_SUCCESS,
    payload:user
});

const googleSignInFail = (error) =>({
    type:types.GOOGLE_SIGN_IN_FAIL,
    payload:error
});

// const adminIsOrNOt = (stateOf) =>({
//     type:types.ADMIN,
//     payload:stateOf
// });
//FACEBOOK SIGN IN


// const facebookSignInStart = () =>({
//     type:types.FACEBOOK_SIGN_IN_START,
// });

// const facebookSignInSuccess = (user) =>({
//     type:types.FACEBOOK_SIGN_IN_SUCCESS,
//     payload:user
// });

// const facebookSignInFail = (error) =>({
//     type:types.FACEBOOK_SIGN_IN_FAIL,
//     payload:error
// });


export const  registerInitiate = (email,password,displayName)=>{
    return function(dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            user.updateProfile({
                displayName
            });
            dispatch(registerSuccess(user));
        }).catch((error)=>dispatch(registerFail(error.message)));
    }
}

export const  loginInitiate = (email,password)=>{
    return function(dispatch){
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            dispatch(loginSuccess(user));
        }).catch((error)=>dispatch(loginFail(error.message)));
    }
}

export const  logoutInitiate = ()=>{
    return function(dispatch){
        dispatch(logoutStart());
        auth.signOut().then((res)=>{
            dispatch(logoutSuccess());
        }).catch((error)=>dispatch(logoutFail(error.message)));
    }
}

export const  googleSignInInitiate = ()=>{
    return function(dispatch){
        dispatch(googleSignInStart());
        auth.signInWithPopup(googleAuthProvider).then(({user})=>{
            dispatch(googleSignInSuccess(user));
        }).catch((error)=>dispatch(googleSignInFail(error.message)));
    }
}

export const  adminloginInitiate = (email,password)=>{
    var userD = null;
    return function(dispatch){
        dispatch(adminloginStart());
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            console.log("user")
            console.log(user.uid)
            userD = user;
            const res = AdminData.post("/hsam-admin",{UID:user.uid});
            return res;
            
        }).then((data,error)=>{
            console.log("state")
            console.log(data.data.state)
            if(data.data.state){
                console.log(data.data.state)
                dispatch(adminloginSuccess(userD));
            }else{
                dispatch(adminloginFail(error));
            }
        })
        .catch((error)=>dispatch(adminloginFail(error.message)));
    }
}

export const  adminlogoutInitiate = ()=>{
    return function(dispatch){
        dispatch(adminlogoutStart());
        auth.signOut().then((res)=>{
            dispatch(adminlogoutSuccess());
        }).catch((error)=>dispatch(adminlogoutFail(error.message)));
    }
}

// export const adminInitiate = (stateOf) =>{
//     return function(dispatch){
//         dispatch(adminIsOrNOt(stateOf));
//     }
// }
// export const  facebookSignInInitiate = ()=>{
//     return function(dispatch){
//         dispatch(facebookSignInStart());
//         auth.signInWithPopup(facebookAuthProvider.addScope("user_birthday, email")).then(({user})=>{
//             dispatch(facebookSignInSuccess(user));
//         }).catch((error)=>dispatch(facebookSignInFail(error.message)));
//     }
// }
