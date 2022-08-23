/**
 * Created by BJ Rutledge
 * Date: 2022-08-18
 * Living with Conviction.org
 * Form Object Schema
 * Schema for received form data object.
 **/

const Joi = require('joi');
const {
  default: JavaScriptEmbedder,
} = require('pdf-lib/cjs/core/embedders/JavaScriptEmbedder');

const counties = [
  'Adams',
  'Asotin',
  'Benton',
  'Chelan',
  'Clallam',
  'Clark',
  'Columbia',
  'Cowlitz',
  'Douglas',
  'Ferry',
  'Franklin',
  'Garfield',
  'Grant',
  'Grays',
  'Island',
  'Jefferson',
  'King',
  'Kitsap',
  'Kititas',
  'Klickitat',
  'Lewis',
  'Lincoln',
  'Mason',
  'Okanogan',
  'Pacific',
  'Pend Oreille',
  'Pierce',
  'San Juan',
  'Skagit',
  'Skamania',
  'Snohomish',
  'Spokane',
  'Stevens',
  'Thurston',
  'Wahkiakum',
  'Walla Walla',
  'Whitman',
  'Yakamia',
];

/**
 * TODO
 * Need to validate:
 *  when:
 *      p_3.3c is checked p_basicLivingExpenses poulated
 *      p_3.3d is checked p_otherCompelling is poulated
 *      p_3.5 is checked p_cantDoComSvc is populated
 *      p_3.6 is checked p_notWillfull is populated
 *
 * TODO Need to test and research docs on Joi for clarification on
 * 'required' and 'description' vs 'describe'
 */

const keys = {
  // Petition Keys
  p_superiorGoesHere: Joi.string()
    .required()
    .description('Name of superior court'),
  p_countyGoesHere: Joi.string()
    .required()
    .valid(...counties)
    .description('Name of county'),
  p_stateOfWaGoesHere: Joi.string()
    .valid('State of Washington')
    .description('State of Washington'),
  p_causeNumberGoesHere: Joi.string().required().description('Cause number'),
  p_nameOnJS: Joi.string().required().description('Name on JNS'),
  p_dateOfBirth: Joi.date().required().description('Date of Birth'),
  p_pcnTcn: Joi.string().required().description('PCN / TCN'),
  p_sid: Joi.string().regex(/^\d+$/).description('SID'),
  p_publicAssistance: Joi.string().required().description('Public Assistance'),
  //Need  to test this to verify it works before applying rule to other
  //checkboxes with dependencies.
  p_basicLivingExpenses: Joi.string()
    .when('p_3.3', {
      is: Joi.bool().valid(true).required(),
      then: Joi.valid(false),
      otherwise: Joi.string().required(),
    })
    .description('Details for non payment')
    .allow('')
    .default(''),
  p_otherCompelling: Joi.string()
    .description('Other compelling reasons')
    .allow('')
    .default(''),
  p_cantDoCommSvc: Joi.string()
    .description('Reason for inability to do community service')
    .allow('')
    .default(''),
  p_notWillful: Joi.string().description('Reason for non payment').default(''),
  p_signedAtCity: Joi.string().required().description('Signed at City'),
  p_signedAtState: Joi.string().required().description('Signed at state'),
  p_signedOnDate: Joi.date().required().description('Signed on Date'),
  p_printName: Joi.string().required().description('Print Name'),
  p_myLegalNameIs: Joi.string().required().description('Legal Name'),
  p_street: Joi.string()
    .regex(/^\s*\S+(?:\s+\S+){2}/)
    .required()
    .description('Street'),
  p_city: Joi.string().required().description('City'),
  p_state: Joi.string().required().description('State'),
  p_zip: Joi.string().required().description('State'),
  p_myEmail: Joi.string().email().required().description('Email'),
  p_ruleWithoutHearingCheckbox: Joi.bool().description(
    'Rule without hearing Checkbox'
  ),
  p_telephoneHearing: Joi.bool().description('Telephone hearing Checkbox'),
  videoHearing: Joi.bool().description('Video Hearing Checkbox'),
  p_inPersonHearing: Joi.bool().description('In person hearing Checkbox'),
  p_haveAHearing: Joi.bool().description('Have a hearing Checkbox'),
  'p_1.1': Joi.bool().description('LFO Interest Checkbox'),
  'p_1.2': Joi.bool().description('Restitution Interest Checkbox'),
  'p_2.1': Joi.bool().description('Remission or Reduction Checkbox'),
  'p_2.2': Joi.bool().description('Additional Time Checkbox'),
  'p_2.3': Joi.bool().description('Collection Checkbox'),
  'p_2.4': Joi.bool().description('Community Restitution Checkbox'),
  'p_3.1': Joi.bool().description('Not paid in full Checkbox'),
  'p_3.2': Joi.bool().description('Indigent because Checkbox'),
  //verify that basic living expenses is populated. If populated then set the value, otherwise, thorw error
  'p_3.3': Joi.when('p_basicLivingExpenses', {
    //verify that text is gt 10 and lt 300 chars
    is: Joi.string().required(),
    then: Joi.valid(true),
    otherwise: Joi.bool().required(),
  }).description('Public assistance Checkbox'),
  'p_3.3b': Joi.bool().description('Annual Income LESS THAN poverty Checkbox'),
  'p_3.3c': Joi.bool().description('Annual Income GREATER THAN poverty'),
  'p_3.3d': Joi.bool().description('Other Compelling circumstances Checkbox'),
  'p_3.3d': Joi.bool().description('Other Compelling Checkbox'),
  'p_3.4': Joi.bool().description('Am Homeless Checkbox'),
  'p_3.5': Joi.bool().description('Not able to do community serice Checkbox'),
  'p_3.6': Joi.bool().description('Not paid LFO in timely manner'),
  'p_3.7': Joi.bool().description('Optional'),

  //Order Keys
  o_superiorGoesHere: Joi.string()
    .required()
    .description('Name of superior court'),
  o_countyGoesHere: Joi.string().required().description('Name of county'),
  o_stateOfWashington: Joi.string()
    .default('State of Washington')
    .describe('State of Washington'),
  o_nameOnJns: Joi.string().required().description('Name as it appears on JNS'),
  o_dateOfBirth: Joi.string().required().description('date of birth'),
  o_causeNumberGoesHere: Joi.string().required().description('Cause number'),
  o_pcnTcn: Joi.string().description('PCN/TCN'),
  o_sid: Joi.string().description('SID'),
  o_f1: Joi.bool()
    .default(false)
    .description('Defendant has been released form total confinement'),
  o_f2: Joi.bool().default(false).description('Had paid full restitution'),
  o_f3: Joi.bool().default(false).description('Is indigent'),
  o_f4: Joi.bool().default(false).description('Is homeless'),
  o_f5: Joi.bool()
    .default(false)
    .description('Failure to timley pay not willful'),
  o_f6: Joi.bool()
    .default(false)
    .description('requested opportunity for community service')
    .required(),
  o_f6Has: Joi.bool()
    .default(false)
    .description('had not requestd community service'),
  o_f6HasNot: Joi.bool()
    .default(false)
    .description('has Not requested community service'),
  o_o1: Joi.bool().default(false).description('LFO interested '),
  o_o2: Joi.bool().default(false).description('Restitution Interest waiver'),
  o_o4: Joi.bool().default(false).description('Remission'),
  o_o6: Joi.bool().default(false).description('Community Restitution'),
  o_o7: Joi.bool().default(false).description('Additional time'),
  o_o8: Joi.bool().default(false).description('Collection'),
  o_printName: Joi.string().required().description('Print name'),
  o_myLegalNameIs: Joi.string().description('Print legal name'),
  o_street: Joi.string()
    .regex(/^\s*\S+(?:\s+\S+){2}/)
    .required()
    .description('street'),
  o_city: Joi.string()
    .regex(/^[A-Za-z]*$/)
    .required()
    .description('city'),
  o_state: Joi.string().length(2).required().description('state'),
  o_zip: Joi.string()
    .regex(/[0-9]*$/)
    .required()
    .description('zip code'),
  o_myEmail: Joi.string().email().required().description('Email address'),
};

module.exports = Joi.object().keys(keys).unknown();
