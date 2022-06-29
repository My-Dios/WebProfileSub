const express = require("express");
const app = express();
const port = 3000

app.listen(port, () => {
  console.log(`Application started and Listening on port ${port}`);
});


// serve your library as static
app.use(express.static('library'))
app.use('/css', express.static(__dirname+'library/css'))
app.use('/js', express.static(__dirname+'library/js'))
app.use('/fonts', express.static(__dirname+'library/fonts'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.render('index', {text: 'This is ejs'});
});