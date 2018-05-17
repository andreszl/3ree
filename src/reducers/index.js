import { SET_USER_ID } from '../constants/ActionTypes'

let user = {
    userId: null,
}  

export default (state = user, action ) => {
	switch(action.type){
        case SET_USER_ID:
            // Antes ; retornaba el objecto sin imprimirlo

            // return Object.assign({}, state, {
            //     userId: action.userId
            // });

            // Despues  imprimo el objecto antes de retornarlo
            const { userId } = action
            user = {
                userId
            }
			console.log('userId as state in store', user)
			return user
		default: 
		 return state
	}
}
