module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				xs: "420px",
				sm: "576px",
				// => @media (min-width: 576px) { ... }

				md: "960px",
				// => @media (min-width: 960px) { ... }

				lg: "1440px",
				xl: "1920px",
			},
		},
	},

	plugins: [],
};
