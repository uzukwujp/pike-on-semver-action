import app from "./app";
import mongoose from "mongoose";

const start = async () => {

  if (!process.env.port) {
    console.error("server port is not set .....");
    process.exit(1)
  }

  if(!process.env.mongoUrl){
    console.error("database url not set .....")
    process.exit(1)
  }

  try{

    await mongoose.connect(process.env.mongoUrl)
    console.log("connection to database server successful ....")

  }catch(err){

    console.error(err)
    process.exit(1)

  }

  const port = process.env.port

  app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
  })
};

start()



