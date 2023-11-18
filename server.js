import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './router/route.js';
import {config} from 'dotenv';

/**import connection file */
import connect from './database/conn.js';
const app = express()


/**app middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/**appliation port */
const port = process.env.PORT || 8080;



/** routes */
app.use('/api', router) /** apis */


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})
/**start server only when we have valid connection */
connect().then(()=>{
    try{
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })
    }catch(error){
        console.log("cannot connect to the server");
    }
}).catch(error=>{
    console.log("Invalid Database connection")
})

