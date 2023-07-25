import express from 'express' 
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import userRouter from './routes/users.js'
import productRouter from './routes/product.js'

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
  }
  
  const PORT=process.env.PORT
  const app=express()
  app.set("view engine", "ejs");
  // process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
  dotenv.config()
  app.use(morgan("dev"));
  app.use(express.json({ limit: "30mb", extended: true }));
  app.use(express.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors());
  app.use(cors(corsOptions));
  app.get('/',(req,res)=>{
      res.send('hello');
  })
  app.use('/users', userRouter)
  app.use('/products', productRouter)

  const port = process.env.PORT || 5000;



mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));