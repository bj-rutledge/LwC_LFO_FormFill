/**
 *Created by BJ Rutledge
 * Date:2022-08-21
 * Living with Conviction.org
 * Validates GR39 form data object 
 */
const gr39formSchema = require('../../lib/pdfForms/gr39/gr39formSchema');

/**
 * Validate object data. Returns false if not properly filled out. 
 * @param {object} testObj Form object
 * @returns bool 
 */
const validateg39Schema = (testObj) => gr39formSchema.validate(testObj);

module.exports = validateg39Schema;