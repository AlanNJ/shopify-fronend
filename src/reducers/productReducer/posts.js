import { GET_ALL_PRODUCTS } from "../../actions/actionTypes";
const initialState = {
	posts: null,
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
};
export default productReducer;
