
import { SongModel } from './song-list-item-view.js';
import { SongListItemView } from './song-list-item-view.js';

const Songs = Backbone.Collection.extend({
  model: SongModel,
});

const SongsListView = Backbone.View.extend({
  className: 'songs',
  render: function () {
    this.$el.html(this.template);
    const that = this;
    this.collection.forEach(function(model) {
      const songView = new SongListItemView({
        model: model
      });
      that.el.appendChild(songView.render().el);
    });
  }
});

export { Songs };
export { SongsListView };
