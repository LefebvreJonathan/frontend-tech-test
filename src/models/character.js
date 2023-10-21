class Character {
  constructor({
    name = null, description = null, thumbnail = null, comicsCount = 0, seriesCount = 0, storiesCount = 0,
  }) {
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
    this.comicsCount = comicsCount;
    this.seriesCount = seriesCount;
    this.storiesCount = storiesCount;
  }

  toString() {
    return `${this.name}: ${this.description}`;
  }
}

export default Character;
