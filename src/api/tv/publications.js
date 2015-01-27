requirejs(['tvs'], function(Tvs) {
  if (!Meteor.isServer) {return;}

  Meteor.publish('tvs', function() {
    if (this.userId) {
      return Tvs.find();
    }
  });
});