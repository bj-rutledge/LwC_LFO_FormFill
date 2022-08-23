/**
 * Created by BJ Rutledge
 * Date: 2022-08-21
 * Living with Conviction.org
 */

const gr39fillForm = require('../../src/lib/pdfForms/gr39/gr39FormFill');

// const validate = require("../../src/validation/gr39Form");
const { validForm } = require('../testObjects');

//pdf binary
const pdfBin = require('../../src/lib/pdfForms/gr39/gr39pdf');
const fs = require('fs');
// console.log(pdfBin)
test('Should write to fs', () => {
  return gr39fillForm(validForm)
    .then((pdf) => {
      // console.log('test -- PDF ',pdf);
      const saveFile = fs.writeFileSync(
        'D:\\OneDrive\\Documents\\projects\\LivingWithConviction\\FormFiller\\LwC_LFO_FormFill\\api\\tests\\unitTests\\output\\testFilledForm.pdf',
        pdf
      );
      const saved = saveFile == undefined ? true : false;
      console.debug('File Saved = ', saved);
      expect(saved).toBe(saved == true);
      expect(
        fs.existsSync(
          'D:\\OneDrive\\Documents\\projects\\LivingWithConviction\\FormFiller\\LwC_LFO_FormFill\\api\\tests\\unitTests\\output\\testFilledForm.pdf'
        )
      ).toBe(true);
    })
    .catch((err) => {
      success = false;
      console.log(err, success);
    });
});
