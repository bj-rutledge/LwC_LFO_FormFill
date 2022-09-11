/**
 *Created by BJ Rutledge
 * Date:2022-08-21
 * Living with Conviction.org
 * Form fill.
 * Fill out Petition and Order forms.
 */

// const { fields } = require('../gr39Fields');
const pdf = require('../gr39pdf');
const formFiller = require('../../../formFiller');

/**
 * Because the p_notWillful -- not willful text area
 * is on two pages, we needed to create two seperate
 * text boxes, one on each page. Therefore, if
 * p_notWillful is longer than 99 chars, we need to
 * devide the text between the boxes and the text and
 * put the second half of the text in the second box.
 * @param {string} text string of text
 */
const divideText = (text) => {
  const maxLen = 100; //max len of text box
  const result = [
    text.substring(0, maxLen),
    text.substring(maxLen + 1, text.length - 1),
  ];
  return result;
};

module.exports = gr39FormFill = (formData, flatten) => {
  if (formData.p_notWillful.length > 100) {
    const divided = divideText(formData['p_notWillful']);
    formData.p_notWillful = divided[0];
    if (divided[1].length > 0) {
      formData.p_notWillful2 = divided[1];
    }
  }
  return formFiller(formData, flatten, pdf);
};
// module.exports = gr39FormFill = (formData, flatten) => formFiller(formData, flatten, pdf);
