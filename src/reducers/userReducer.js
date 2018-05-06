const userReducer = (state = {}, action) => {
    switch (action.type) {
		case 'SET_USER_NAME':
			state = { ...state, name: action.payload };
			break;
        case 'SET_USER_AGE':
			state = { ...state, age: action.payload };
			break;
		default:
			break;
	}
    return state;
};
export default userReducer;