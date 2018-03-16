
class TextToSMSParser {
  constructor() {
    this.letters = {
      'abc': 2,
      'def': 3,
      'ghi': 4,
      'jkl': 5,
      'mno': 6,
      'pqrs': 7,
      'tuv': 8,
      'wxyz': 9,
      ' ': 0
    }
  }

  parse(text) {
    let result = [];
    let lastChar = undefined;
    text = text.toLowerCase();
    for (let char of text) {
      for(let key in this.letters) {
        if (key.indexOf(char) != -1) {
          let count = key.indexOf(char) + 1;
          if (this.letters[key] == lastChar) {
            result.push('_');
          }
          for(let i=0; i < count; i++) {
            result.push(this.letters[key]);
          }
          lastChar = this.letters[key];
          break;
        }
      }
    }

    return result.join('');
  }
}


module.exports = TextToSMSParser;
