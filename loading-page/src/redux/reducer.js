import * as types from "./actionTypes";

const initialState = {
    loading :false,
    currentUser:null,
    admin:false,
    adminData:null,
    error:null,
    adminError :null,
};

const userReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
        
        case types.GOOGLE_SIGN_IN_START:
        // case types.FACEBOOK_SIGN_IN_START:
            return {...state,loading:true}
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
        
        case types.GOOGLE_SIGN_IN_SUCCESS:
        // case types.FACEBOOK_SIGN_IN_SUCCESS:
            return {...state,loading:false,currentUser:action.payload}
        case types.LOGOUT_SUCCESS:
            return{...state,currentUser:null}
        case types.SET_USER:
            return {...state,loading:false,currentUser:action.payload}
       
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        
        case types.LOGOUT_FAIL:
        case types.GOOGLE_SIGN_IN_FAIL:
        // case types.FACEBOOK_SIGN_IN_FAIL:
            return {...state,loading:false,error:action.payload}
        case types.ADMIN:
            return {...state,loading:false,admin:action.payload}
        case types.ADMIN_LOGIN_START:
            return {...state,loading:true}
        case types.ADMIN_LOGIN_SUCCESS:
            return {...state,loading:false,adminData:action.payload}
        case types.ADMIN_LOGIN_FAIL:
            return {...state,loading:false,adminError:action.payload}
        case types.SET_ADMIN:
                return {...state,loading:false,adminData:action.payload}
        default:
            return state;
    }
}

export default userReducer;