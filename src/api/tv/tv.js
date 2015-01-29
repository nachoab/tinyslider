Tvs = new Meteor.Collection('tvs');

Tv = new Class({
  initialize: function () {

  }
});

if (Meteor.isClient) {Meteor.subscribe('tvs');}
if (Meteor.isServer) {
  Meteor.publish('tvs', function() {
    if (this.userId) {
      return Tvs.find();
    }
  });

  Tvs.allow({
    insert: function(tvId, tv) {
      return Meteor.user();
    },

    update: function(tvId, tv) {
      return Meteor.user();
    },

    remove: function(tvId, tv) {
      return Meteor.user();
    }
  });
}

