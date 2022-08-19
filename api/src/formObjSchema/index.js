/**
* Created by BJ Rutledge
* Date: 2022-08-18
* Living with Conviction.org
* Form Object Schema 
* Schema for received form data object. 
**/

const { allow } = require('joi');
const Joi = require('joi');
const { default: JavaScriptEmbedder } = require('pdf-lib/cjs/core/embedders/JavaScriptEmbedder');

const counties = [
    'Adams', 'Asotin', 'Benton', 'Chelan', 
    'Clallam', 'Clark', 'Columbia', 'Cowlitz',
    'Douglas', 'Ferry', 'Franklin', 'Garfield',
    'Grant', 'Grays', 'Island', 'Jefferson', 'King', 
    'Kitsap', 'Kititas', 'Klickitat', 'Lewis', 
    'Lincoln', 'Mason', 'Okanogan', 'Pacific', 
    'Pend Oreille', 'Pierce', 'San Juan', 'Skagit',
    'Skamania', 'Snohomish', 'Spokane', 'Stevens',
    'Thurston', 'Wahkiakum', 'Walla Walla', 'Whitman', 
    'Yakamia'
];

/**
 * TODO 
 * Need to validate: 
 *  when:
 *      p_3.3c is checked p_basicLivingExpenses has value 
 *      p_3.3d is checked p_otherCompelling is poulated 
 *      p_3.5 is checked p_cantDoComSvc is populated 
 *      p_3.6 is checked p_notWillfull is populated  
 *      
 * TODO Need to test and research docs on Joi for clarification on 
 * 'required' and 'description' vs 'describe'
 */

const keys = {
    p_superiorGoesHere: Joi.string().required().description('Name of superior court'),
    p_countyGoesHere: Joi.string().required().valid(...counties).description('Name of county'),
    p_stateOfWaGoesHere: Joi.string().required().valid('State of Washington').description('State of Washington'),
    p_stateOfWaGoesHere: Joi.string().required().description('Cause number'),
    p_nameOnJS: Joi.string().required().description('Name on JNS'),
    p_dateOfBirth: Joi.date().required().description('Date of Birth'),
    p_pcnTcn: Joi.string().required().description('PCN / TCN'),
    p_sid: Joi.string().required().regex(/^\d+$/ig).description('SID'),
    p_publicAssistance: Joi.string().required().description('Public Assistance'),
    p_basicLivingExpenses: Joi.string().description('Details for non payment').allow('').default(''),
    p_otherCompelling: Joi.string().description('Other compelling reasons').allow('').default(''),
    p_cantDoCommSvc: Joi.string().description('Reason for inability to do community service').allow('').default(''),
    p_notWillful: Joi.string().description('Reason for non payment').default(''),
    p_signedAtCity: Joi.string().required().description('Signed at City'),
    p_signedAtState: Joi.string().required().description('Signed at state'),
    p_signedOnDate: Joi.string().required().description('Signed on Date'),
    p_printName: Joi.string().required().description('Print Name'),
    p_myLegalNameIs: Joi.string().required().description('Legal Name'), 
    p_street: Joi.string().required().description('Street'),
    p_city: Joi.string().required().description('City'),
    p_state: Joi.string().required().description('State'),
    p_zip:  Joi.string().required().description('State'),
    p_myEmail:  Joi.string().required().description('Email'),
    p_ruleWithoutHearingCheckbox: Joi.boolean().description('Rule without hearing Checkbox'),
    p_telephoneHearing: Joi.boolean().description('Telephone hearing Checkbox'),
    videoHearing: Joi.boolean().description('Video Hearing Checkbox'),
    p_inPersonHearing: Joi.boolean().description('In person hearing Checkbox'),
    p_haveAHearing: Joi.boolean().description('Have a hearing Checkbox'),
    "p_1.1": Joi.boolean().description('LFO Interest Checkbox'),
    "p_1.2": Joi.boolean().description('Restitution Interest Checkbox'), 
    "p_2.1": Joi.boolean().description('Remission or Reduction Checkbox'), 
    "p_2.2": Joi.boolean().description('Additional Time Checkbox'), 
    "p_2.3": Joi.boolean().description('Collection Checkbox'), 
    "p_2.4": Joi.boolean().description('Community Restitution Checkbox'), 
    "p_3.1": Joi.boolean().description('Not paid in full Checkbox'), 
    "p_3.2": Joi.boolean().description('Indigent because Checkbox'), 
    "p_3.3": Joi.boolean().description('Public assistance Checkbox'), 
    "p_3.3b": Joi.boolean().description('Annual Income LESS THAN poverty Checkbox'), 
    "p_3.3c": Joi.boolean().description('Annual Income GREATER THAN poverty'), 
    "p_3.3d": Joi.boolean().description('Other Compelling circumstances Checkbox'), 
    "p_3.3d": Joi.boolean().description('Other Compelling Checkbox'), 
    "p_3.4": Joi.boolean().description('Am Homeless Checkbox'), 
    "p_3.5": Joi.boolean().description('Not able to do community serice Checkbox'), 
    "p_3.6": Joi.boolean().description('Not paid LFO in timely manner'), 
    "p_3.7": Joi.boolean().description('Optional'),
}