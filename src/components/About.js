import React from "react";

export const About = () => {
	return (
		<>
			<div className="mt-[100px] lg:mt-10">
				<div className="mt-10 w-[90vw] h-[35vh] lg:w-[40vw] sm:h-[35vh] border-2 shadow flex flex-col items-center mb-10">
					<img src="./location.png" className="mt-10" />
					<p className="text-3xl font-bold mt-5">Headquarter</p>
					<p className="text-xl font-medium mt-2">Amalapuram,AP</p>
				</div>
				<div className="mt-10 w-[90vw] h-[35vh] lg:w-[40vw] border-2 shadow flex flex-col items-center mb-10">
					<img src="./phone.png" className="mt-10" />
					<p className="text-3xl font-bold mt-5">Phone</p>
					<p className="text-xl font-medium mt-2">+91 6304176070</p>
				</div>
				<div className="mt-10 w-[90vw] h-[35vh] lg:w-[40vw] border-2 shadow flex flex-col items-center mb-10">
					<img src="./email.png" className="mt-10" />
					<p className="text-3xl font-bold mt-5">Email</p>
					<p className="text-xl font-medium mt-2">alannpn75@gmail.com</p>
				</div>
			</div>
		</>
	);
};
export default About;
