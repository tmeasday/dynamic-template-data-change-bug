if (Meteor.isClient) {
  Session.set('ready', false);
  Template.hello.helpers({
    withData: function() {
      if (Session.get('ready')) {
        return 2;
      } else {
        return 1;
      }
    }
  });

  Template.hello.events({
    'click button': function () {
      Session.set('ready', true)
    }
  });
  
  Template.subtemplate.helpers({
    helper: function() {
      if (Session.get('ready') && (this.toString() === '1'))  {
        console.error("`this` should be 2 before the helper re-runs!");
      }
    }
  });
}
