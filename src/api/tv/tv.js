TvSchema = new SimpleSchema({
  userId: {
    type: Number,
    label: 'Tv user'
  },
  name: {
    type: String,
    label: 'Tv name description',
    max: 120
  }
});

Tvs = new Meteor.Collection('tvs');
Tvs.attachSchema(TvSchema);

if (Meteor.isClient) {Meteor.subscribe('tvs');}

if (Meteor.isServer) {
  Meteor.publish('tvs', function() {
    // if (this.userId) {
      return Tvs.find();
    // }
  });

  Tvs.allow({
    insert: function(tvId, tv) {
      // return Meteor.user();
      return true;
    },

    update: function(tvId, tv) {
      // return Meteor.user();
      return true;
    },

    remove: function(tvId, tv) {
      // return Meteor.user();
      return true;
    }
  });
}

