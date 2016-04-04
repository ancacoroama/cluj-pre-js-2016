
import { SongModel } from './songs/song-model.js';
import { SongListItemView } from './songs/song-list-item-view.js';
import { Songs } from './songs/songs-list-item-view.js';
import { SongsListView } from './songs/songs-list-item-view.js';
import { PlayListModel } from './playlist/playlist-model.js';
import { PlaylistItemView } from './playlist/playlist-item-view.js';
import { PlayListsModels } from './playlist/playlists-items-view.js';
import { PlayListsView } from './playlist/playlists-items-view.js';
import { PlayListCollection } from './playlist/playlistAPI.js';


const viewFunction = $(function () {

  const playlistsJSON = `[{"id":0,"title":"Playlist 1","image":"../core/assets/up-all-night-small.png","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money pierdut ea","songAuthor":"Andra","songLength":303,"songListened":94},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies el buletin ea","songAuthor":"Andra","songLength":359,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin el buletin love","songAuthor":"Eminem","songLength":312,"songListened":11},{"image":"../core/assets/2015-best-music.png","songTitle":"pierdut pierdut enemies ea","songAuthor":"Eminem","songLength":37,"songListened":9},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money enemies enemies","songAuthor":"Dr. Dre","songLength":325,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money el money","songAuthor":"Eminem","songLength":58,"songListened":10}]},{"id":1,"title":"Playlist 2","image":"../core/assets/up-all-night-small.png","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"money money love ea","songAuthor":"Dr. Dre","songLength":97,"songListened":100},{"image":"../core/assets/2015-best-music.png","songTitle":"el pierdut pierdut ea","songAuthor":"Smiley","songLength":42,"songListened":86},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money pierdut enemies","songAuthor":"Dr. Dre","songLength":454,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"money ea love buletin","songAuthor":"Dr. Dre","songLength":448,"songListened":16},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin pierdut ea el","songAuthor":"Dr. Dre","songLength":363,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"el love el buletin","songAuthor":"Smiley","songLength":88,"songListened":20}]},{"id":2,"title":"Playlist 3","image":"../core/assets/up-all-night-small.png","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"enemies enemies el love","songAuthor":"Smiley","songLength":192,"songListened":51},{"image":"../core/assets/2015-best-music.png","songTitle":"el enemies pierdut el","songAuthor":"Andra","songLength":232,"songListened":87},{"image":"../core/assets/2015-best-music.png","songTitle":"ea enemies pierdut enemies","songAuthor":"Smiley","songLength":234,"songListened":5},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies ea enemies buletin","songAuthor":"Andra","songLength":123,"songListened":45},{"image":"../core/assets/2015-best-music.png","songTitle":"love money buletin love","songAuthor":"Andra","songLength":299,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"el love ea love","songAuthor":"Andra","songLength":478,"songListened":34},{"image":"../core/assets/2015-best-music.png","songTitle":"ea el enemies money","songAuthor":"Dr. Dre","songLength":280,"songListened":35}]}]`;

  const songJSON = `{"image":"../core/assets/2015-best-music.png","name":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78}`;

  const song = new SongModel(JSON.parse(songJSON));

  const songView = new SongListItemView({ model: song });
  songView.render();
  $('#page-content').append(songView.el);

  const songsJSON = `[{
    "image": "../core/assets/2015-best-music.png",
    "name": "love love enemies love",
    "songAuthor": "Smiley",
    "songLength": 74,
    "songListened": 82
}, {
    "image": "../core/assets/2015-best-music.png",
    "name": "love love enemies pierdut",
    "songAuthor": "Dr. Dre",
    "songLength": 186,
    "songListened": 78
}, {
    "image": "../core/assets/2015-best-music.png",
    "name": "ea money pierdut ea",
    "songAuthor": "Andra",
    "songLength": 303,
    "songListened": 94
}, {
    "image": "../core/assets/2015-best-music.png",
    "name": "enemies el buletin ea",
    "songAuthor": "Andra",
    "songLength": 359,
    "songListened": 23
}, {
    "image": "../core/assets/2015-best-music.png",
    "name": "buletin el buletin love",
    "songAuthor": "Eminem",
    "songLength": 312,
    "songListened": 11
}, {
    "image": "../core/assets/2015-best-music.png",
    "name": "pierdut pierdut enemies ea",
    "songAuthor": "Eminem",
    "songLength": 37,
    "songListened": 9
}, {
    "image": "../core/assets/2015-best-music.png",
    "name": "ea money enemies enemies",
    "songAuthor": "Dr. Dre",
    "songLength": 325,
    "songListened": 13
}, {
    "image": "../core/assets/2015-best-music.png",
    "name": "enemies money el money",
    "songAuthor": "Eminem",
    "songLength": 58,
    "songListened": 10
}]`;

// const playlistSong = new Songs(JSON.parse(songsJSON));
// const songsView = new SongsListView({ collection: playlistSong });
//   songsView.render();
//   $('#songs').append(songsView.el);

  // const playlistJSON = `{
  //       "id": 0,
  //       "title": "Playlist 1",
  //       "image": "../core/assets/up-all-night-small.png",
  //       "id": 1,
  //       "title": "Playlist 2",
  //       "image": "../core/assets/up-all-night-small.png",
  //       "id": 2,
  //       "title": "Playlist 3",
  //       "image": "../core/assets/up-all-night-small.png"
  //   }`;


  // const playlistItem = new PlayListModel(JSON.parse(playlistJSON));
  // const playListView = new PlaylistItemView({ model: playlistItem });
  // playListView.render();
  // $('#playlist-content').append(playListView.el);
  //
  // const playlistSongs = new PlayListsModels(JSON.parse(playlistsJSON));
  // const playListsView = new PlayListsView({ collection: playlistSongs });
  // playListsView.render();
  // $('#playlists-content').append(playListsView.el);

  const playlistAPI = new PlayListCollection();
  playlistAPI.fetch().done(() => {
    const pageView = new PlayListsView({
      el: document.getElementById('playlist-content'),
      collection: playlistAPI,
    });
    pageView.render();
  });
});

export { viewFunction };
