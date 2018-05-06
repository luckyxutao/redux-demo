const topicsReducer = (state = { list: null }, action) => {
	switch (action.type) {
		case 'GET_TOPICS':
			state = { ...state, list: [{ name: 'aaaa' }, { name: 'bbbb' }, { name: 'cccc' }] };
			break;
		default:
			break;
	}
	return state;
};
export default topicsReducer;
