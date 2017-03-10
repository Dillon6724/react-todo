
var mongoose    = require('mongoose'),
    server      = require('./lib/server-setup')(),
    dbname      = 'reacttodolist',
    MONGOURI    = process.env.MONGOLAB_URI || 'mongodb://localhost:27017',
    Schema      = mongoose.Schema;
    PORT        = process.env.PORT || 3000;

var todoSchema = new Schema({
  title: { type: String, required: true, unique: false},
  description: {type: String, required: false, unique: false},
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

server.post('/todos', function(req, res) {
  var newTodo = new Todo({title: req.body.title, description: req.body.description, isCompleted: false})
  newTodo.save(function(err) {
    if(err) {
      res.status(500).send("FIX THIS")
    }
    else {
      res.status(200).send("YAY")
    }
  })
})

server.delete('/todo/delete/:id', function(req, res) {
  Todo.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.status(500).send("FIX THIS")
    } else {
      res.status(200).send("YAY")
    }
  })
})

server.put('/todo/update/:id', function (req, res) {
	var updated = req.body
	Todo.findByIdAndUpdate(req.params.id, updated, function (err, newTodo) {
		if(!err) {
			res.status(200).send(newTodo)
		} else {
      res.status(500).send(err)
		}
	})
});

server.listen(3000, function () {
  console.log('Server runninggggggggggggggg on 3000');
});
