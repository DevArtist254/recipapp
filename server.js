const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 2540;

app.listen(port, () => {
    console.log(`Application has started in port ${port}...`);
})

