const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const catagories = require('./data/categories.json')
const news = require('./data/news.json')


app.get('/', (req, res) => {
    res.send('hello world ')
})

const port = 3000; // You can change this to any port number you prefer

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/catagories', (req, res) => {
    // console.log(catagories)
    res.send(catagories)

})
app.get('/catagories/:id', (req, res) => {
    const id = parseInt(req.params.id)
    //category zero means all news
    if (id === 0) {
        res.send(news)
    }
    else {
        const catagoryNews = news.filter(c => parseInt(c.category_id) === id)
        res.send(catagoryNews)
    }

})

app.get('/news', (req, res) => {
    // console.log(news)
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const Id = req.params.id
    // console.log(Id)
    const newsbyId = news.find(n => n._id == Id)
    res.send(newsbyId)
})

