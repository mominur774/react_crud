export default (state, action) =>{
    switch(action.type){
        case "ADD_USER":
            return{
                ...state,
                users: [action.payload, ...state.users]
            }
        case "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(user=> user.id !== action.payload)
            }
        case "UPDATE_USER":
            const updateUser = action.payload
            const updateUsers = state.users.map(user=>{
                if(user.id === updateUser.id){
                    return updateUser
                }
                return user
            })
            return{
                ...state,
                users: updateUsers
            }
        default:
            return state
    }
}