UI.body.helpers({
  xOne: function () {
    return Session.equals('x', 1);
  },
  xTwo: function () {
    return Session.equals('x', 2);
  },
  x: function () {
    return Session.get('x');
  }
});

UI.body.events({
  'click #one': function () {
    Session.set('x', 1);
  },
  'click #two': function () {
    Session.set('x', 2);
  }
});
