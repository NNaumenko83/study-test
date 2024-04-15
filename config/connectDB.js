const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const DB = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB is connected. Name: ${DB.connection.name}. PORT: ${DB.connection.port}. HOST: ${DB.connection.host}`.green.bold.italic);
        
    } catch (error) {
        console.log(error.message.bold.red);
        process.exit(1)
        
    }

 }

module.exports= connectDB;

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));