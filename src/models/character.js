class Character {
  constructor({ name = null, description = null, thumbnail = null }) {
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
  }

  toString() {
    return `${this.name}: ${this.description}`;
  }
}

export default Character;
