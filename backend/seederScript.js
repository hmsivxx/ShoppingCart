require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.error("Error while importing data");
    process.exit(1);
  }
};

importData();
