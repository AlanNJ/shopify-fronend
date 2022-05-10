import React, { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import axios from "axios";
import { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { add, getInitial } from "../actions";

import { toast } from "react-toastify";

export const AddToCart = (props) => {
	const [post, setPost] = useState([]);
	const [price, setPrice] = useState();
	const [total, setTotal] = useState();
	const [id, setId] = useState();
	const [user, setUser] = useState({});
	const [quantity, setQuantity] = useState(1);

	useLayoutEffect(() => {
		props.getInitialData();
		if (props?.user) {
			setUser(props?.user?.user?.user);
		}

		axios
			.get(
				`https://shopify-backend7777.herokuapp.com/post/get-single-post/${props.params.id}`
			)
			.then((res) => {
				console.log(res.data);
				console.log(res.data.post.price);
				setPost(res.data.post);
				setPrice(res.data.post.price);
				setTotal(res.data.post.price);
			});
	}, [props?.user?.user?.user?._id]);
	console.log(price);
	var idd = props.user.user && props.user.user.user._id;
	console.log(user);
	let obj1 = { post, idd, total, quantity };

	const addToCart = async () => {
		props.addtoCart(obj1);

		//  if (response.data.message) {
		//  	toast.success(response.data.message);
		//  } else {
		//  	toast.error(response.data.message);
		//  }
	};

	//props.user.user && props.user.user.user && setId(props.user.user.user._id);

	// if (props.user && props.user.user && props.user.user.user) {
	// 	setId(props.user.user.user._id);
	// }

	const calculate = (e) => {
		e.preventDefault();
		console.log(price);
		setQuantity(e.target.value);
		console.log(typeof e.target.value);
		let final = Number(price) * Number(e.target.value);
		setTotal(final);
	};

	return (
		<div className="w-[90vw]  sm:w-[70vw] md:w-[60vw]  gap-x-1 h-auto rounded shadow border-2 p-2 my-10 lg:w-[50vw]">
			<div className="py-5 border-b-2 border-black-700 flex justify-between px-2">
				<p className="font-bold text-lg">Price</p>
				<p className="font-bold text-lg">${price}</p>
			</div>
			<div className="py-5 border-b-2 border-black-700 flex justify-between px-2">
				<p className="font-bold text-lg">Status</p>
				<p className="font-bold text-lg">Available</p>
			</div>
			<div className="py-5 border-b-2 border-black-700 flex justify-between px-2">
				<p className="font-bold text-lg">Reviews</p>
				<div className="flex items-center">
					<AiOutlineStar />
					<AiOutlineStar />
					<AiOutlineStar />
					<AiOutlineStar />
					<AiOutlineStar />
					<p className="font-bold text-lg">11 reviews</p>
				</div>
			</div>
			<div className="py-5 border-b-2 border-black-700 flex justify-between px-2 items-center">
				<p className="font-bold text-lg">Quantity</p>
				<div className="flex h-2/3 w-[25vw] bg-zinc-200 md:h-[50px] w-[60px] md:w-3/4 border-2 justify-between items-center px-2 py-2 mr-3 text-lg md:text-2xl">
					<select
						name="quantity"
						className="w-full bg-none"
						onChange={(e) => calculate(e)}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
					</select>
				</div>
			</div>
			<h1 className="font-bold relative text-center text-lg py-1">
				Total:{total}
			</h1>
			<button
				className="w-full h-[7vh] bg-black rounded text-white my-5 "
				onClick={(e) => addToCart(e)}
			>
				ADD TO CART
			</button>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		getInitialData: () => dispatch(getInitial()),
		addtoCart: (obj1) => dispatch(add(obj1)),
	};
};
const mapStateToProps = (state) => {
	return {
		post: state.post,
		user: state.user,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
