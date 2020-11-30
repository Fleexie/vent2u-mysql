import app from './app.js';
// require("./app/routes/login.routes")(app);
const PORT: number|string = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
