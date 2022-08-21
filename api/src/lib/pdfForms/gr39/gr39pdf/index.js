/**
 * Created by BJ Rutledge
 * Date:2022-08-21
 * Living with Conviction.org
 * Grab gr39 pdf
 */

//todo grab from DB and load into memory
const fs = require('fs');

const file = fs.readFileSync('D:\\OneDrive\\Documents\\projects\\LivingWithConviction\\FormFiller\\LwC_LFO_FormFill\\api\\resources\\fullGR39WithFields.pdf');
module.exports = file;
