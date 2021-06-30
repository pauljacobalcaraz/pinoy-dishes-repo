const initialState = {
	foods: [],
	lastRank: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_FOODS':
			return {
				...state,
				foods: action.payload,
				// lastRank: lastRank,
			};
		case 'ADD_FOOD':
			// console.log(state.lastRank);
			let newFood = action.payload;
			let foodCopy = [...state.foods];
			foodCopy.push(newFood);
			return {
				...state,
				foods: foodCopy,
			};
		case 'UP_FOOD':
			// console.log(state.lastRank);

			return {
				...state,
				foods: action.payload,
			};
		case 'DOWN_FOOD':
			// console.log(state.lastRank);

			return {
				...state,
				foods: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
