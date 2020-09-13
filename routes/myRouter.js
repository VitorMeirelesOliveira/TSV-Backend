import express from "express";

import myController from "../controllers/myController.js";

const app = express();

app.post("/safratsv/opc", myController.opc);
app.post("/safratsv/terms", myController.terms);
app.post("/safratsv/acp", myController.acp);

export { app as myRouter };
