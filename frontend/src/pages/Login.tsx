import React from "react";
import CustomizedInput from "../components/shared/CustomizedInput";
import { Button } from "@mui/material";
import { IoIosLogIn } from "react-icons/io";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	const formData = new FormData(e.currentTarget);
	const email = formData.get("email");
	const password = formData.get("password");
	try {
		const { data } = axios.post("");
	} catch (error) {}
};
const Login = () => {
	return (
		<div className='w-full h-full flex'>
			<div className='hidden p-16 mt-16 md:flex flex-[0.5]'>
				<img
					src='airobot.png'
					alt='airobot'
					className='object-cover '
				/>
			</div>
			<div className='flex flex-1 md:flex-[0.5]  justify-center p-4 ml-auto mt-32'>
				<form
					onSubmit={handleSubmit}
					style={{ boxShadow: "10px 10px 20px #000" }}
					className='m-auto p-[30px] rounded-[10px] border-none'>
					<div className='flex flex-col justify-center'>
						<h4 className='text-center p-4 font-[600] font-mono '>Login</h4>
						<CustomizedInput
							label='Email'
							name='email'
							type='email'
						/>
						<CustomizedInput
							label='Password'
							name='password'
							type='password'
						/>
						<Button
							type='submit'
							sx={{
								px: 2,
								py: 1,
								mt: 2,
								width: 400,
								borderRadius: 2,
								bgcolor: "#00fffc",
								":hover": {
									bgcolor: "white",
									color: "black",
								},
							}}
							endIcon={<IoIosLogIn />}>
							Login
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
