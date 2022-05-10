import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const RegisterCard = () => {
	const navigate = useNavigate();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [phone, setPhone] = useState();
	const registerUser = async () => {
		if (name && email && password && phone) {
			const res = await axios.post(
				"https://shopify-backend7777.herokuapp.com/api/register/",
				{
					name,
					email,
					password,
					phone,
				}
			);
			if (res.data.ok == true) {
				navigate("/login");
			}
			console.log(res.data);
		}
	};

	return (
		<div className="w-[70vw] h-auto mt-[10vh] flex flex-col items-center py-10 border shadow rounded sm:w-[70vw] md:w-[70vw] lg:w-[55vw]">
			<input
				placeholder="Enter your name"
				className="w-3/4 py-3 px-3 border-b-2 "
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				placeholder="Enter your Email"
				className="w-3/4 py-3 px-3 border-b-2 mt-5"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				placeholder="Enter your password"
				className="w-3/4 py-3 px-3 border-b-2 mt-5"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<input
				placeholder="Enter your phone"
				value={phone}
				className="w-3/4 py-3 px-3 border-b-2 mt-5"
				onChange={(e) => setPhone(e.target.value)}
			/>
			<button
				className="py-3 px-5 shadow my-10 bg-green-500 text-xl rounded "
				onClick={(e) => registerUser()}
			>
				Register
			</button>
			<Link to="/login">
				<p className="text-lg">I have an account ? Login</p>
			</Link>
		</div>
	);
};
export default RegisterCard;
