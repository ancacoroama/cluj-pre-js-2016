describe('scripts tests', function() {
      it('Test1', function() {
      var songObj{} ={"image":"../core/assets/2015-best-music.png"; "songTitle":"love love enemies love"; "songAuthor":"Smiley"; "songLength":"74"; "songListened":"82"};
      var song = new Song(songObj);
            expect(song.image).toEqual("../core/assets/2015-best-music.png");
            expect(song.songTitle).toEqual('love love enemies love');
            expect(song.songAuthor).toEqual('Smiley');
            expect(song.songLength).toEqual('74');
            expect(song.songListened).toEqual('82');
    });

      it('Test2', function() {
      var songObj =  {"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut", "songAuthor":"Dr.Dre", "songLength":"186", "songListened""78" };
      var song = new Song(songObj);
            expect(song.image).toEqual("../core/assets/2015-best-music.png");
            expect(song.songTitle).toEqual('love love enemies pierdut');
            expect(song.songAuthor).toEqual('Dr.Dre');
            expect(song.songLength).toEqual('186');
            expect(song.songListened).toEqual('78');
    });

    });
