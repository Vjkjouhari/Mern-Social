const app = require('./app');
const { connectDataBase } = require('./config/database,js');

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on PORT ${process.env.PORT}`);
});

connectDataBase();
