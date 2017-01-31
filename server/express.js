
var mongoose    = require('mongoose'),
    server      = require('./lib/server-setup')(),
    dbname      = 'reacttodolist',
    MONGOURI    = process.env.MONGOLAB_URI || 'mongodb://localhost:27017',
    Schema      = mongoose.Schema;
    PORT        = process.env.PORT || 3000;

var todoSchema = new Schema({
  title: { type: String, requiered: true, unique: false},
  description: {type: String, requiered: false, unique: false},
  isCompleted: {type: Boolean, default: false}
})

var Todo = mongoose.model('todo', todoSchema)
mongoose.connect(MONGOURI + '/' + dbname)
mongoose.set('debug', true)


server.get('/todos', function(req, res) {
  Todo.find({}, function(err, allTodos) {
    res.send(allTodos)
  })
})


server.listen(3000, function () {
  console.log('Server runninggggggggggggggg on 3000');
});
