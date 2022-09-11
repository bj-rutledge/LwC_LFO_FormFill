/**
 * Created by BJ Rutledge
 * Date:2022-08-21
 * Living with Conviction.org
 * Grab gr39 pdf
 */

//todo grab from DB and load into memory
const fs = require('fs');
const path = require('path');
const pdfPath = path.join(
  __dirname,
  '../../../../../tests/testPdf/fullGR39WithFields.pdf'
);

const file = fs.readFileSync(pdfPath);
module.exports = file;
