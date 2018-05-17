import { SET_USER_ID } from '../constants/ActionTypes'

let user = {
    userId: null,
}  

export default (state = user, action ) => {
	switch(action.type){
        case SET_USER_ID:
            return Object.assign({}, state, {
                userId: action.userId
            });
            user = [...state,user(action)]
			console.log('game as state in store', user)
			return user
		default: 
		 return state
	}
}
