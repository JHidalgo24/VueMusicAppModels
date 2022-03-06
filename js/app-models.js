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
    rpm = 0
    sides = 0
    price = 0

    constructor(album,artist,length,genre,rpm,sides,price) {
        super();
        this.album = album;
        this.artist = artist;
        this.length = length;
        this.genre = genre;
        this.rpm = rpm;
        this.sides = sides
        this.price = price
    }

}


class CD extends SongItem{

    album = '';
    artist = '';
    length = '';
    genre = '';
    trackCount = '';
    price = 0


    constructor(album,artist,length,genre,trackCount,price) {
        super();
        this.album = album;
        this.artist = artist;
        this.length = length;
        this.genre = genre;
        this.trackCount = trackCount;
        this.price = price
    }
}

class Cassette extends SongItem{
    album = '';
    artist = '';
    length = '';
    genre = '';
    price = 0

    constructor(album,artist,length,genre,price) {
        super();
        this.album = album;
        this.artist = artist;
        this.length = length;
        this.genre = genre;
        this.price = price
    }
}