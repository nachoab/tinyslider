model = {
  title:'Titulo desde model.title',
  tvs: null
};


var update = function(doc) {
  model.tvs = Tvs.find().fetch();
  Object.observe(model.tvs, function(changes) {
    console.log('tvs actualizadas', changes);
    Tvs.remove(changes)
    Tvs.insert()
  });
}
Tvs.find().observe({
  added: update,
  changed: update,
  removed: update,
  movedTo: update
});