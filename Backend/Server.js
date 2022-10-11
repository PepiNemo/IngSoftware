import { connect } from 'mongoose'
import { applicacion } from "./App.js";
import { PORT, DATABASE_CONNECTION_STRINGS } from "./configs/index.js";


connect(DATABASE_CONNECTION_STRINGS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database Connected :3')
    applicacion.listen(PORT, () => {
        console.log(`Server started listening on PORT: ${PORT} ....`)
    })
})


