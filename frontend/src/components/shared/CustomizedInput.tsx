import { TextField } from "@mui/material";
import React from "react";
const CustomizedInput = ({
	name,
	type,
	label,
}: {
	name: string;
	type: string;
	label: string;
}) => {
	return (
		<TextField
			className='!border-white !outline-white'
			margin='normal'
			InputLabelProps={{
				style: { color: "white", borderColor: "white", outline: "none" },
			}}
			name={name}
			label={label}
			type={type}
			inputProps={{
				style: {
					width: 400,
					borderRadius: 10,
					fontSize: 20,
					color: "white",
					borderColor: "white",
					outline: "none",
				},
			}}
		/>
	);
};

export default CustomizedInput;
