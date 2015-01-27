define('tvs', [], function() {
  Tvs = new Meteor.Collection('tvs');

  Tv = new Class({
    initialize: function () {

    }
  });

  if (Meteor.isClient) {Meteor.subscribe('tvs');}
  return Tvs;
});
