import React from "react";
import "../index.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<div className="h-[10vh] border-2 border-black-1000 w-[100vw] max-w-full bg-green-400 flex justify-around items-center text-xl md:text-2xl">
			<BsFacebook
				onClick={() =>
					(window.location.href =
						"https://www.facebook.com/profile.php?id=100010544894360")
				}
			/>

			<BsInstagram
				onClick={() =>
					(window.location.href = "https://www.instagram.com/alan_npn/?hl=en")
				}
			/>
			<BsLinkedin
				onClick={() =>
					(window.location.href = "https://www.linkedin.com/feed/")
				}
			/>
			<BsGithub
				onClick={() => (window.location.href = "https://github.com/AlanNJ")}
			/>
		</div>
	);
};
export default Header;
