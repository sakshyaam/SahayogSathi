import "dotenv/config"; // ← line 1, no more dotenv.config() needed

import connectDB from "./db/DbConnect.js";
import { server } from "./socket/socket.js";
import "./app.js";

connectDB()
  .then(() => {
    server.listen(process.env.PORT || 3000, () => {
      console.log(`Server is listening: ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("MONGODB CONNECTION FAILED");
  });