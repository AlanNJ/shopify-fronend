import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
	ADD_TO_CART,
	DELETE_CART,
	EMPLTY_CART,
	GET_ALL_PRODUCTS,
	INITIAL_CART_DATA,
	INITIAL_DATA,
	LOGIN_USER,
	LOGOUT_USER,
} from "./actionTypes";

export const setUser = (data) => {
	return {
		type: LOGIN_USER,
		payload: data,
	};
};
export const getInitialData = (data) => {
	return {
		type: INITIAL_DATA,
		payload: data,
	};
};
export const setProducts = (data) => {
	return {
		type: GET_ALL_PRODUCTS,
		payload: data,
	};
};
export const logoutUser = (data) => {
	return {
		type: LOGOUT_USER,
		payload: data,
	};
};
export const addtoCart = (data) => {
	return {
		type: ADD_TO_CART,
		payload: data,
	};
};
export const removeFromCart = (data) => {
	return {
		type: DELETE_CART,
		payload: data,
	};
};
export const cartData = (data) => {
	return {
		type: INITIAL_CART_DATA,
		payload: data,
	};
};
export const emptyCart = (data) => {
	return {
		type: EMPLTY_CART,
		payload: data,
	};
};
export const loginUser = (data) => {
	return (dispatch) => {
		console.log("hello");
		axios
			.post("http://localhost:5000/api/login/", data)
			.then((response) => {
				console.log(response.data.user);
				toast.success("Logged in successfully");
				setTimeout(() => {
					dispatch(setUser(response.data.user));
					localStorage.setItem("User", JSON.stringify(response.data));
				}, [2000]);
			})
			.catch((err) => {
				console.log(err);
				toast.error("Invalid Credentials");
			});
	};
};
export const getInitial = () => {
	return (dispatch) => {
		const data = JSON.parse(localStorage.getItem("User"));
		console.log(data);
		console.log(data);
		dispatch(getInitialData(data));
	};
};
async function gett() {
	const data = await axios.get("http://localhost:5000/post/get-post/");
	return data.data.post;
}
export const getInitialProducts = () => {
	console.log("hello");
	return (dispatch) => {
		axios.get("http://localhost:5000/post/get-post/").then((res) => {
			console.log(res.data.post);
			dispatch(setProducts(res.data.post));
		});
		//console.log(result);

		//dispatch(setProducts(result));
	};
};
export const logout = () => {
	return (dispatch) => {
		const data = localStorage.removeItem("User");
		dispatch(logoutUser(null));
	};
};
export const add = (obj) => {
	let post = obj.post;
	let idd = obj.idd;
	let total = obj.total;
	let quantity = obj.quantity;
	console.log(quantity);
	return (dispatch) => {
		axios
			.post(`http://localhost:5000/post/add-to-cart/`, {
				post: post,
				id: idd,
				total: total,
				quantity: quantity,
			})
			.then((res) => {
				dispatch(addtoCart(res.data));
				console.log(res.data);
				toast.success("Added to cart successfully");
			})
			.catch((err) => toast.error("Item already in cart"));
	};
};
export const remove = (obj) => {
	console.log(obj);
	return (dispatch) => {
		axios
			.patch(`http://localhost:5000/post/remove-item/${obj.key}`, {
				headers: obj.params,
			})
			.then((res) => {
				dispatch(removeFromCart(res.data.post));
			});
	};
};
export const getInitialDataCartData = (obj) => {
	console.log(obj);
	return (dispatch) => {
		axios
			.get(`http://localhost:5000/post/get-cart-items/${obj}`)
			.then((res) => dispatch(cartData(res.data.cartItems)));
	};
};
export const emptyCartt = (obj) => {
	return (dispatch) => {
		dispatch(emptyCart([]));
	};
};
