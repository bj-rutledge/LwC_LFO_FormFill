/**
 * Created by BJ Rutledge
 * Date: 2022-08-21
 * Living with Conviction.org
 */
//Test One requirements
const gr39fillForm = require('../../src/lib/pdfForms/gr39/gr39FormFill');
const { validForm } = require('../testObjects');
const {logger, level: loggerLevel} = require('../../src/lib/logger')

//Test 2 requirements
const outPath =
  'D:\\OneDrive\\Documents\\projects\\LivingWithConviction\\FormFiller\\LwC_LFO_FormFill\\api\\tests\\unitTests\\output\\testFilledForm.pdf';
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

logger.log(loggerLevel.debug, 'Testing PDF form fill.')
test('Should read in PDF, fill out form with Data and then write to fs', () => {
  //We do not want to flatten this form so that we can
  //read it in in the following test.
  const flattenForm = false;
  return gr39fillForm(validForm, flattenForm)
    .then((pdf) => {
      const saveFile = fs.writeFileSync(outPath, pdf);
      const saved = saveFile == undefined ? true : false;
      expect(saved).toBe(saved == true);
      expect(fs.existsSync(outPath)).toBe(true);
    })
    .catch((err) => {
      success = false;
      console.log(err, success);
    });
});

test('Should read PDF that was created in previous test. PDF fields should equal validForm fields', () => {
  fs.readFile(outPath, (err, data) => {
    PDFDocument.load(data).then((pdf) => {
      const doc = pdf.getForm();
      for (prop in validForm) {
        if (validForm[prop] === true) {
          let isChecked = doc.getCheckBox(prop).isChecked();
          expect(isChecked).toBe(true);
        } else if (typeof validForm[prop] === 'string') {
          let textField = doc.getTextField(prop).getText();
          expect(textField).toBe(validForm[prop]);
        }
      }
    });
  });
});
