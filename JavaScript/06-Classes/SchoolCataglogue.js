class School {
  constructor(name, numberOfStudents) {
    this._name = name;
    this._numberOfStudents = numberOfStudents; 
  }

  get name() {
    if (this._name) {
      return this._name;
    } else {
      console.log('Getter Error!');
    }
  }

  get level() {
    if (this._level) {
      return this._level;
    } else {
      console.log('Getter Error!');
    }
  }

  get numberOfStudents() {
    if (this._numberOfStudents) {
      return this._numberOfStudents;
    } else {
      console.log('Getter Error!');
    }
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof(newNumberOfStudents) === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    this._level = 'primary';
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    if (this._pickupPolicy) {
      return this._pickupPolicy;
    } else {
      console.log('Getter Error!');
    }
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, numberOfStudents);
    this._level = 'high';
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    if (this._sportsTeams) {
      return this._sportsTeams;
    } else {
      console.log('Getter Error!');
    }
  }
}

const lorraineHansburry = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansburry.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.quickFacts();
console.log(alSmith.sportsTeams);