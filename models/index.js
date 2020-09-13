import mongoose from "mongoose";

import myModel from "./myModel.js";

const db = {};

db.url = "mongodb://localhost:27017/technee"
db.mongoose = mongoose;
db.proposal = myModel(mongoose);

export { db };
