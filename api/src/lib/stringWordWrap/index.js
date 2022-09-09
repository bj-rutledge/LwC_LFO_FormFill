/**
 *Created by BJ Rutledge
 * Date:2022-08-25
 * Living with Conviction.org
 * Form fill.
 * Fill out Petition and Order forms.
 */

/**
 * Takes a string and wraps the text to the desired width.
 * @param {string} text Text
 * @param {nummer} width Number of chars in line.
 */
const wordWrap = (text, width) => {
  if (text.width <= width) {
    return text;
  }
  result = [];
  let currentLineLength = 0;
  const splitText = text.split(' ');

  for (let i = 0; i < splitText.length; i++) {
    const word = splitText[i];
    //if any word is too long, just bail.
    if (word.length > width) {
      return text;
    }

    if (word.length + currentLineLength < width) {
      result.push(`${word} `);
      currentLineLength += word.length + 1;
    } else {
      //start a new line.
      result.push(`\n${word} `);
      currentLineLength = word.length;
      // if(i >= 1){
      result[i - 1] = result[i - 1].trim();
      // }
    }
  }
  result[result.length - 1] = result[result.length - 1].trim();
  return result.join('');
};

module.exports.wordWrap = wordWrap;
