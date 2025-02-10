import express from "express";
import morgan from "morgan";
import cors from "cors";

import v1 from "./routes/v1";
import connectMongoDB from "./database/connect";

const app = express();
// connect to mongo db
connectMongoDB();

// Middleware
app.use(morgan("combined")); // Logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS

// Routes - with version
app.use("/v1", v1);

app.get('/status', async (req, res) => {
    res.status(200).json({success: true, message: "All systems operational.", code: 200})
})

app.all('*', async (req, res) => {
    
    res.status(404).json({success: false, message: "No matching route found.", code: 404})

})

export default app;