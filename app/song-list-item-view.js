var SongModel = Backbone.Model.extend({
});

var SongListItemView = Backbone.View.extend({
  template: function() {
    var fn = _.template($("script#song-list-item").html());
    return fn.apply(this, arguments);
  },
    className: 'song-list-item',
    render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
