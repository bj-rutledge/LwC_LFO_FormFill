/**
 *Created by BJ Rutledge
 * Date:2022-08-24
 * Living with Conviction.org
 * Form fill.
 * Fill out Petition and Order forms.
 */

// const { fields } = require('../gr39Fields');
const { PDFDocument } = require('pdf-lib');
const { logger, levels: logLevels } = require('../logger');

/**
 * Fills out form and returns promise. Promise resolve is a pdf binary
 * Make sure that the form data has passed through validation!!!
 * If flatten is set to true, PDF will be flattened.
 * * All field names will be deleted if flattened!!!
 * @param {object} formData Validated form object.
 * @param {boolean} flatten Flatten PDF.
 */
module.exports = async function fillForm(formData, flatten, pdf) {
  let error, formBytes;
  try {
    logger.log(logLevels.info, 'Processing form fill.');
    const doc = await PDFDocument.load(pdf);
    const form = doc.getForm();
    for (let prop in formData) {
      if (formData[prop] === true) {
        form.getCheckBox(prop).check();
      } else {
        //} if (typeof formData[prop] === 'string') {
        const textField = form.getTextField(prop);
        if (formData[prop].length > 61) {
          textField.enableMultiline();
        }
        textField.setText(formData[prop]);
      }
    }

    /**
     * Flattening a form field will take the current appearance for each of
     * that field's widgets and make them part of their page's content stream.
     * All form fields and annotations associated are then removed. Note that
     * once a form has been flattened its fields can no longer be accessed or
     * edited.
     * This operation is often used after filling form fields to ensure a
     * consistent appearance across different PDF readers and/or printers.
     * Another common use case is to copy a template document with form
     * fields into another document. In this scenario you would load the
     * template document, fill its fields, flatten it, and then copy its
     * pages into the recipient document - the filled fields will be copied
     * over.
     */
    if (flatten) {
      form.flatten();
    }
    formBytes = await doc.save();
  } catch (_error) {
    logger.log(logLevels.error, `formFill:${_error}`);
    error = _error;
  }

  return new Promise((resolve, reject) => {
    if (error) {
      reject(error);
    } else {
      logger.log(logLevels.info, 'Success @ form fill.');
      resolve(formBytes);
    }
  });
};
