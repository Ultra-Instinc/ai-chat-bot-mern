import axios from "axios";
export const loginUser = async (email: string, password: string) => {
	const res = await axios.post("/user/user", {
		email,
		password,
	});
	if (res.status !== 200) {
		throw new Error("Unable to login!");
	}
	const data = await res.data;
	return data;
};
