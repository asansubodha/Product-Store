import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'; // Ensure the correct file path and extension
import productRoutes from './routes/product.route.js'; // Ensure the correct file path and extension

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // allows us to accept JSON data in the body

app.use("/api/products", productRoutes); // Ensure the correct file path

console.log(process.env.MONGODB_URI);

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});