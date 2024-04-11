import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// CONNECTIONS AND LISTENERS
const port = process.env.PORT || 5000;
connectToDatabase()
	.then(() => {
		console.log("Connected to MONGO DB Successfully !");
		app.listen(port || 5000, () =>
			console.log("Server is running on port : " + port)
		);
	})
	.catch((err) => console.log(err));
