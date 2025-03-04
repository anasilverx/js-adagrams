class Adagrams {  
  static drawLetters = () => {
    // Implement this method for wave 1
    const letterFrequency = [
      { letter: 'A', frequency: 9 },
      { letter: 'B', frequency: 2 },
      { letter: 'C', frequency: 2 },
      { letter: 'D', frequency: 4 },
      { letter: 'E', frequency: 12 },
      { letter: 'F', frequency: 2 },
      { letter: 'G', frequency: 3 },
      { letter: 'H', frequency: 2 },
      { letter: 'I', frequency: 9 },
      { letter: 'J', frequency: 1 },
      { letter: 'K', frequency: 1 },
      { letter: 'L', frequency: 4 },
      { letter: 'M', frequency: 2 },
      { letter: 'N', frequency: 6 },
      { letter: 'O', frequency: 8 },
      { letter: 'P', frequency: 2 },
      { letter: 'Q', frequency: 1 },
      { letter: 'R', frequency: 6 },
      { letter: 'S', frequency: 4 },
      { letter: 'T', frequency: 6 },
      { letter: 'U', frequency: 4 },
      { letter: 'V', frequency: 2 },
      { letter: 'W', frequency: 2 },
      { letter: 'X', frequency: 1 },
      { letter: 'Y', frequency: 2 },
      { letter: 'Z', frequency: 1 }
    ];

    const frequencyArray = letterFrequency.flatMap(({ letter, frequency }) =>
      Array(frequency).fill(letter)
    );
    
    const letterBank = [];
    const seenIndex = new Set();
    while (letterBank.length < 10) {
      const randomIndex = Math.floor(Math.random() * frequencyArray.length);
      if (!seenIndex.has(randomIndex)) {
        letterBank.push(frequencyArray[randomIndex]);
        seenIndex.add(randomIndex);
      }
    }  
    return letterBank;
  };

  static usesAvailableLetters = (input, lettersInHand) => {
    // Implement this method for wave 2
    const lettersFrequency = {};
    for (let letter of lettersInHand) {
      lettersFrequency[letter] = (lettersFrequency[letter] || 0) + 1;
    }
    for (let char of input) {
      if (!lettersFrequency[char]) {
        return false;
      }
      lettersFrequency[char]--;
    }
    return true;
  };

  static scoreWord = (word) => {
    // Implement this method for wave 3
    const pointsValue1 = new Set(['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']);
    const pointsValue2 = new Set(['D', 'G']);
    const pointsValue3 = new Set(['B', 'C', 'M', 'P']);
    const pointsValue4 = new Set(['F', 'H', 'V', 'W', 'Y']);
    const pointsValue5 = new Set(['K']);
    const pointsValue8 = new Set(['J', 'X']);
    const pointsValue10 = new Set(['Q', 'Z']);
    
    let score = 0;
    for (let char of word.toUpperCase()) {
      if (pointsValue1.has(char)) {
        score += 1
      } else if (pointsValue2.has(char)) {
        score += 2
      } else if (pointsValue3.has(char)) {
        score += 3
      } else if (pointsValue4.has(char)) {
        score += 4
      } else if (pointsValue5.has(char)) {
        score += 5
      } else if (pointsValue8.has(char)) {
        score += 8
      } else if (pointsValue10.has(char)) {
        score += 10
      }
    }
    if (word.length >= 7 && word.length <= 10) {
      score += 8;
    }
    return score; 

  };

  static highestScoreFrom = (words) => {
    // Implement this method for wave 4
    let highestScore = 0;
    let highestWord = '';

    for (let word of words) {
      let score = Adagrams.scoreWord(word);
      if (score > highestScore) {
        highestScore = score
        highestWord = word 
      } else if (score === highestScore) {
        if (word.length === 10 && highestWord.length !== 10) {
          highestWord = word;
        } else if (word.length < highestWord.length && highestWord.length !== 10) {
          highestWord = word;
        }
      }
    }
    
    return {'word' : highestWord, 'score': highestScore};
  };
}
export default Adagrams;