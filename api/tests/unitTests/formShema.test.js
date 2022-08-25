/**
 *Created by BJ Rutledge
 * Date: 2022-08-20
 * Living with Conviction.org
 *
 *
 * * Test Test object schema. **
 * Each form has fields that are dependent upon eachother. For example,
 * if a p_3.3 is selected, then p_basicLivingExpenses should be populated.
 *
 * * Validate the following rules:
 *      Is valid object
 *      p_3.3c is checked p_basicLivingExpenses poulated
 *      p_3.3d is checked p_otherCompelling is poulated
 *      p_3.5 is checked p_cantDoComSvc is populated
 *      p_3.6 is checked p_notWillfull is populated
 */

const { validForm, invalidForm } = require('../testObjects');
const {logger, levels: logerLevels} = require('../../src/lib/logger');
logger.log(logerLevels.debug, `Testing schema.`)
const validateSchema = require('../../src/validation/gr39Form');

// /**Test to see if we receive an error property. */
// // const validateSchema = (testObj) => schema.validate(testObj).hasOwnProperty('error');

/**test schema with valid object. Make sure that we are getting setting rules properly */
test('should return undefined for valid form', () => {
  expect(validateSchema(validForm).error).toBe(undefined);
});

/**test schema with invalid object. Make sure that we are getting setting rules properly */
test('should return am object for invalid form', () => {
  expect(typeof validateSchema(invalidForm).error).toBe('object');
});
