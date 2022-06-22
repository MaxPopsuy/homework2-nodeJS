const app = require("./src/app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
