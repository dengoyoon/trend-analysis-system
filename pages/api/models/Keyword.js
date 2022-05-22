import mongoose from "mongoose";

const KeywordSchema = mongoose.Schema({
    keywordName : {
        type: String
    },
    categoryName : {
        type : Number
    },
    keywordAmounts : {
        type: Array
    },
    createdAt : {
        type: String
    }
});

// Student
mongoose.models = {};
const model = mongoose.model('Keyword', KeywordSchema);

export default model;