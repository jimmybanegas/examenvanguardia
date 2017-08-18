module.exports = class Patito {
  static greet(name) {
    if (name == null) { return 'Hellos Stranger'; }
    return `Hellos ${name}`;
  }
};

