var SongModel = Backbone.Model.extend({
});

var Songs = Backbone.Collection.extend({
  model: SongModel
});

var SongsListView = Backbone.View.extend({
    className: 'songs',
    render: function () {
    this.$el.html(this.template);
    var that = this;
    this.collection.forEach(function(model) {
      var songView = new SongListItemView({
        model: model
      });
      that.el.appendChild(songView.render().el);
    });
  }
});
