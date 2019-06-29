class Media {
  constructor(title) {
    this._title = title;
    this._isCheckOut = false;
    this._ratings = [];
  }

  getErrorMessage() {
    console.log('Request error for get!');
  }

  setErrorMessage() {
    console.log('Request error for set!');
  }

  get title() {
    if (this._title) {
      return this._title;
    } else {
      this.getErrorMessage();
    }
  }

  get isCheckOut() {
    if (this._isCheckOut) {
      return this._isCheckOut;
    } else {
      this.getErrorMessage();
    }
  }

  get ratings() {
    if (this._ratings) {
      return this._ratings;
    } else {
      this.getErrorMessage();
    }
  }

  set isCheckOut(status) {
    if (typeof(this._isCheckOut) === 'boolean') {
      this._isCheckOut = status;
    } else {
      this.setErrorMessage();
    }
  }

  set ratings(rating) {
    if (typeof(rating) === 'number') {
      this._ratings.push(rating);
    } else {
      this.setErrorMessage();
    }
  }

  getAverageRating() {
    let sum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    let ave = sum / this.ratings.length;
    return ave;
  }

  toggleCheckOutStatus() {
    this._isCheckOut = !this._isCheckOut;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    if (this._author) {
      return this._author;
    } else {
      this.getErrorMessage();
    }
  }

  get pages() {
    if (this._pages) {
      return this._pages;
    } else {
      this.getErrorMessage();
    }
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    if (this._director) {
      return this._director;
    } else {
      this.getErrorMessage();
    }
  }

  get runTime() {
    if (this._runTime) {
      return this._runTime;
    } else {
      this.getErrorMessage();
    }
  }
}

class Cd extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    if (this._artist) {
      return this._artist;
    }
  }

  get songs() {
    if (this._songs) {
      return this.songs;
    }
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckOut);
[4, 5, 5].forEach(num => historyOfEverything.ratings = num);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckOut);
[1, 1, 5].forEach(num => speed.ratings = num);
console.log(speed.getAverageRating());