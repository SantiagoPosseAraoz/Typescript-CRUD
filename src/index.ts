import express from "express";
const app = express();
import router from "./routes/index";

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(router);

app.listen(3000, () => {
  console.log("Server up on port", 3000);
});
