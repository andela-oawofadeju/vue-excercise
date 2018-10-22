var nextId = 1;

var Task = function(params) {
  this.id = nextId++;
  this.name = params.name;
  this.category_id = params.category_id;
  this.status = (typeof params.status === 'undefined') ? 0 : params.status; // ['open', 'completed']
};

module.exports = Task;