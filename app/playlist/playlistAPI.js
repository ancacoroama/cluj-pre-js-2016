import { PlayListModel } from './playlist-model.js';
import { SongModel } from '../songs/song-model.js';

const PlayListCollection = Backbone.Collection.extend({
  model: PlayListModel,
  url: 'http://localhost:3000/playlists',
  parse(response) {
    return response.map((val) => {
      const parsedElementPlaylist = new PlayListModel(val);
      console.log(parsedElementPlaylist);
      return parsedElementPlaylist;

    });
  },
});

export { PlayListCollection };
