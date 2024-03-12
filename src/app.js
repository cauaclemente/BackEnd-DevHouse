import express from "express";
import mongoose from "mongoose";
import path from "path"

import routes from "./routes";

class App{

    constructor(){
        this.server = express();

        mongoose.connect("mongodb+srv://devhouse:devhouse123@devhouse.6db7skr.mongodb.net/devhouse?retryWrites=true&w=majority&appName=DevHouse");

        this.middleware();
        this.routes();
    }

    middleware(){

        this.server.use(
            "/files",
            express.static(path.resolve(__dirname, "..", "uploads"))
        )

        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)
    }
}

export default new App().server;