var express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json);

// Post Routes
router.get('/', (req, res) => {
	res.send("Thank You ...");
})

router.get('/posts', (req, res) => {
	res.send("Your Posts ...");
})

router.post("/posts", (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	});
	post.save()
	.then(data => {
		res.json(data);
	})
	.catch(err => {
		res.json({ message:err });
	});
})

module.exports = router