const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://osaro:1234@nodeexpressprojects.2ajfhz1.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(()=>console.log('CONNECTED TO THE DB...'))
.catch((err)=>console.log(err));
