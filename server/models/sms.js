
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
    this.lastChar = undefined;
    this.result = [];
    text = text.toLowerCase();
    
    for (let char of text) {
      const key = this.findKeyForChar(char);
      const parsedChar = this.letters[key];
      const repeatTimes = key.indexOf(char) + 1;

      this.addPrefixIfNeeded(parsedChar);
      this.addParsedChar(parsedChar, repeatTimes);
      this.lastChar = parsedChar;
    }

    return this.result.join('');
  }

  findKeyForChar(char) {
    for(let key in this.letters) {
      if (key.indexOf(char) != -1) {
        return key;
      }
    }
  }

  addPrefixIfNeeded(char) {
    if (this.shouldAddPrefix(char)) {
      this.result.push('_');
    }
  }

  shouldAddPrefix(char) {
    return char == this.lastChar;
  }

  addParsedChar(parsedChar, repeatTimes) {
    this.result.push(this.multiplyChar(parsedChar, repeatTimes));
  }

  multiplyChar(char, repeatTimes) {
    let result = ''
    for(let i=0; i < repeatTimes; i++) {
      result += char;
    }
    return result;
  }

}


class SMSToTextParser {

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

  parse(smsEncodedText) {
    if (smsEncodedText.length == 0) {
      return ''
    }

    let result = []
    let lastChar = smsEncodedText[0];
    let counter = 1;

    for (let i=1; i <= smsEncodedText.length; i++) {
      let currentChar = smsEncodedText[i];
      if (currentChar == lastChar) {
        counter++; 
      } else {

        for (let key in this.letters) {
          if(this.letters[key] == lastChar) {

            let actualChar = key[counter-1]; 
            result.push(actualChar);
            break;

          }
        }

        counter = 1;
        lastChar = currentChar;
      }
    }

    return result.join('');
  }

}


module.exports =  {
  TextToSMSParser,
  SMSToTextParser
}
