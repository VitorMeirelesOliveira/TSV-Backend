import express from "express";
import { myRouter } from "./routes/myRouter.js";
import { db } from "./models/index.js";

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log("Sucessfully connected to mongodb ");
  } catch (error) {
    console.log("Error: Cannot connect to mongodb " + error);
  }
})();

const app = express();

app.use(express.json());

app.use(myRouter);

app.listen(3000, () => {
  console.log("API is up!");
});
