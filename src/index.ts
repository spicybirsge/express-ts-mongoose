import app from "./app";

const PORT = process.env.PORT || 6060;

app.listen(PORT, () => {
    if(process.env.NODE_ENV !== "production") {
        console.log(`[^] Server is running on port ${PORT} in ${process.env.NODE_ENV || "developement"} mode. Access via localhost: http://localhost:${PORT}`)
    } else {
        console.log(`[^] Server is running on port ${PORT} in ${process.env.NODE_ENV || "developement"} mode`)
    }
});