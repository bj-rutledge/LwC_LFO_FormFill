/**
 *Created by BJ Rutledge
 * Date:2022-08-21
 * Living with Conviction.org
 * Form fill. 
 * Fill out Petition and Order forms.
 */

const gr39Schema = require('../gr39formSchema');
const {fields} = require('../gr39Fields')
const {PDFDocument} = require('pdf-lib');
const pdf = require('../gr39pdf');
const { forbidden, object } = require('joi');

/**
 * Fills out form and returns promise. Promise resolve is a pdf binary 
 * Make sure that the form data has passed through validation!!!
 * @param {object} formData Validated form object.
 */
module.exports = async function fillForm(formData) {
    console.log('entering fillForm')
    let error, formBytes;
    try {
        const doc = await PDFDocument.load(pdf);
        const form = doc.getForm();
        // console.log(formData);
        fields.textboxes.forEach(textbox => {
            // console.log('textbox: ',textbox, ' Value: ', formData[textbox]);
            
            form.getTextField(textbox).setText('TEST');
        });

        fields.checkboxes.forEach(checkbox => {
            // console.log('checkbox: ',checkbox, ' Value: ', formData[checkbox]);
            if (formData[checkbox]) {
                form.getCheckBox(checkbox).check();
            }
        });

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
        form.flatten();
        // console.log('saving bytes');
        formBytes = await doc.save();
        // console.log('FORM BYTES: ',formBytes);
    } catch(error) {
        console.log('error',error)
        //todo set up error handling 
        error = new Error(error);
    }

    return new Promise((resolve, reject) => {
        if (error) {
            reject(error);
        }
        else {
            resolve(formBytes);
        }
    });
}

