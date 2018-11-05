var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title : String,
  data : String
});


module.export = mongoose.model("Post", PostSchema);
