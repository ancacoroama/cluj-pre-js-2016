var PlayListsModels = Backbone.Collection.extend({
  model: PlayListModel
});

var PlayListsView = Backbone.View.extend({
  className: 'playlists-view',
  render: function () {
    this.$el.html(this.template);
    var that = this;
    this.collection.forEach(function(model) {
      var item = new PlaylistItemView({
        model: model
      });
      that.$el.append(item.render().el);
    });
  }
});
