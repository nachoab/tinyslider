model = {
  title:'Titulo desde model.title',
  tvs: null
};


var update = function(doc) {
  model.tvs = Tvs.find().fetch();

  Object.observe(model.tvs, function(changes) {
    var changes = changes[0];

    if (changes.type === 'add') {
      var key = Number(changes.name);
      Tvs.insert(changes.object[key]);
    } else if (changes.type === 'delete') {
      Tvs.remove(changes.oldValue);
    }
  });
}

Tvs.find().observe({
  added: update,
  changed: update,
  removed: update,
  movedTo: update
});