var DrumView = Backbone.View.extend({
  el: "#drum-view-tmpl",

  events: {
    "click .drum-btn": "toggleButtonColor"
  },

  initialize: function () {
    this.render();
  },

  toggleButtonColor: function (e) {
    AppLib.toggleButtonColor(e.currentTarget);
  },

  render: function () {
    return _.template(this.$el.html());
  }
});
