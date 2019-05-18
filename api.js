const express = require('express');
const router = express.Router();
const Survey = require("./survey");

router.get('/surveys', (req, res) => {
	Survey.find({})
	.then(mugger => {
		res.send(mugger);
	})
});

router.post('/surveys', (req, res) => {
	//console.log(req.body);
	Survey.create(req.body)
	.then(survey => {
		res.send(survey);
	});
});

router.put('/surveys/:id', (req, res) => {
	Survey.findByIdAndUpdate({_id: req.params.id}, req.body)
	.then(() => {
		Survey.findOne({_id: req.params.id})
		.then(survey => {
			res.send(survey);
		});
	})
});

router.delete('/surveys/:id', (req, res) => {
	Survey.deleteOne({_id: req.params.id})
	.then(survey => {
		res.send(survey);
	});
});

module.exports = router;