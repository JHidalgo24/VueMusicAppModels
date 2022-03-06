function SongItem(){
    const IN_STOCK = {IN_STOCK:'Stocked',NO_STOCK:'Out Of Stock'};

    this.stock = IN_STOCK.IN_STOCK;

    this.stocked = function (){
        this.stock = IN_STOCK.IN_STOCK;
    }
    this.noStock = function () {
        this.stock = IN_STOCK.NO_STOCK;
    }



}

class Vinyl extends SongItem{

    album = '';
    artist = '';
    length = '';
    genre = '';
    rpm = ''
    sides = ''


    constructor(album,artist,length,genre,rpm,sides) {
        super();
        this.album = album;
        this.artist = artist;
        this.length = length;
        this.genre = genre;
        this.rpm = rpm;
        this.sides = sides
    }

}


class CD extends SongItem{

    album = '';
    artist = '';
    length = '';
    genre = '';
    trackCount = '';

    constructor(album,artist,length,genre,trackCount) {
        super();
        this.album = album;
        this.artist = artist;
        this.length = length;
        this.genre = genre;
        this.trackCount = trackCount;
    }
}

class Cassette extends SongItem{
    album = '';
    artist = '';
    length = '';
    genre = '';

    constructor(album,artist,length,genre) {
        super();
        this.album = album;
        this.artist = artist;
        this.length = length;
        this.genre = genre;
    }
}