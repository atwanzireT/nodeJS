const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id:2, name:'course3'},
    {id:3, name:'course3'},
]
app.get('/', (req, res) => {
    res.send("Hello  World");
});

app.get('/api/courses/', (req, res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course was not found ...!')
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query)
});

app.post('/api/courses', (req, res) => {
    const course = {
        id:course.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})


const port = process.env.PORT || 5000;
app.listen(port);
console.log(`App running at port ${port} .....`);