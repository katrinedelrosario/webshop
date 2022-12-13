import express from 'express'
import dotenv from 'dotenv' 

dotenv.config();

const app = express();

app.get("/", (req, res) => {
     res.send('This is the main site');
});

app.get('/about', (req, res) => {
      res.send('This is the about page');
})

app.get('/contact', (req, res) => {
      res.send('This is the contact page');
});

app.listen(4000, () => {
      console.log("express is driving");
});
app.use((req, res, next) => {
    res.status(404).send("Site was not found")
})