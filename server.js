const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "build");
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  return res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log("server is running at ", PORT);
});
