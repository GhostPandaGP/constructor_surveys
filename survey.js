const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const SurveySchema = new Schema({
// 	name: String,
// 	number: Number,
// 	title: String,
// 	comment: String
// });

const SurveySchema = new Schema({
	components: {
		type: String,
		data: {
			options: {
				elements: Array,
				placeholder: String,
				rows: Number,
				cols: Number,
				start: Number,
				end: Number
			},
			title: {
				value: String,
				styles: Object
			},
			subtitle: {
				value: String,
				styles: Object
			},
			condition: {},
			styles: Object
		}
	},
	styles: Object
});

const Survey = mongoose.model("survey", SurveySchema);

module.exports = Survey;