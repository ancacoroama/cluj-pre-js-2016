var PlayListModel = Backbone.Model.extend({
});

var PlaylistItemView = Backbone.View.extend({
  template: function() {
    var fn = _.template($("script#play-list-item").html());
    return fn.apply(this, arguments);
  },
    className: 'play-list-item',
    render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
