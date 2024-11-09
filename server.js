const dotenv = require('dotenv');
const app = require('./app');
const { default: mongoose } = require('mongoose');

dotenv.config({ path: "./config.env" });

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB);

        console.log("Connected to DB....");
    } catch (error) {
        console.log(error);
    }
}

connectDB();

const port = process.env.PORT || 2540;

app.listen(port, () => {
    console.log(`Application has started in port ${port}...`);
})

