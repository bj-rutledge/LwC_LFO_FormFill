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

module.exports = gr39FormFill = (formData, flatten) => formFiller(formData, flatten, pdf);

