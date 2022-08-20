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

const schema = require("../../src/lib/formObjSchema");
const { validForm, invalidForm } = require("../testObjects");

/**Test to see if we receive an error property. */
const validateSchema = (testObj) => schema.validate(testObj).hasOwnProperty("error");
// console.log(validForm,invalidForm)
// console.log(schema.validate(invalidForm).hasOwnProperty('error'))
// console.log(schema.validate(invalidForm))

/**test schema with valid object. Make sure that we are getting setting rules properly */
test("should return true for valid form", () => {
  expect(validateSchema(validForm)).toBe(false);
});

/**test schema with invalid object. Make sure that we are getting setting rules properly */
test("should return false for invalid form", () => {
  expect(validateSchema(invalidForm)).toBe(true);
});
