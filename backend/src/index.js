import dotenv from "dotenv";
import connectDB from "./db/DbConnect.js";
import { server } from "./socket/socket.js";

dotenv.config();

connectDB()
  .then(() => {
    server.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening : ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("MONGODB CONNECTION FAILED");
  });