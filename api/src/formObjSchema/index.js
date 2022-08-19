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
 */

const keys = {
    p_superiorGoesHere: Joi.string().required().description('Name of superior court'),
    p_countyGoesHere: Joi.string().required().valid(...counties).description('Name of county'),
    p_stateOfWaGoesHere: Joi.string().required().valid('State of Washington').description('State of Washington'),
    p_stateOfWaGoesHere: Joi.string().required().description('Cause number'),
    p_nameOnJS: Joi.string().required().describe('Name on JNS'),
    p_dateOfBirth: Joi.date().required().describe('Date of Birth'),
    p_pcnTcn: Joi.string().required().describe('PCN / TCN'),
    p_sid: Joi.string().required().regex(/^\d+$/ig).describe('SID'),
    p_publicAssistance: Joi.string().required().describe('Public Assistance'),
    p_basicLivingExpenses: Joi.string().describe('Details for non payment').allow('').default(''),
    p_otherCompelling: Joi.string().describe('Other compelling reasons').allow('').default(''),
    p_cantDoCommSvc: Joi.string().describe('Reason for inability to do community service').allow('').default(''),
    p_notWillful: Joi.string().describe('Reason for non payment').default(''),
    p_signedAtCity: Joi.string().required().describe('Signed at City'),
    p_signedAtState: Joi.string().required().describe('Signed at state'),
    p_signedOnDate: Joi.string().required().describe('Signed on Date'),
    p_printName: Joi.string().required().describe('Print Name'),
    p_myLegalNameIs: Joi.string().required().describe('Legal Name'), 
    p_street: Joi.string().required().describe('Street'),
    p_city: Joi.string().required().describe('City'),
    p_state: Joi.string().required().describe('State'),
    p_zip:  Joi.string().required().describe('State'),
    p_myEmail:  Joi.string().required().describe('Email'),
    "p_1.1": Joi.boolean().describe('LFO Interest checkbox'),
    "p_1.2": Joi.boolean().describe('Restitution Interest Checkbox'), 
    "p_2.1": Joi.boolean().describe('Remission or Reduction Checkbox'), 
    "p_2.2": Joi.boolean().describe('Additional Time checkbox'), 
    "p_2.3": Joi.boolean().describe('Collection checkbox'), 
    "p_2.4": Joi.boolean().describe('Community Restitution checkbox'), 
    "p_3.1": Joi.boolean().describe('Not paid in full checkbox'), 
    "p_3.2": Joi.boolean().describe('Indigent because checkbox'), 
    "p_3.3": Joi.boolean().describe('Public assistance checkbox'), 
    "p_3.3b": Joi.boolean().describe('Annual Income LESS THAN poverty checkbox'), 
    "p_3.3c": Joi.boolean().describe('Annual Income GREATER THAN poverty'), 
    "p_3.3d": Joi.boolean().describe('Other Compelling circumstances checkbox'), 
    "p_3.3d": Joi.boolean().describe('Other Compelling checkbox'), 
    "p_3.4": Joi.boolean().describe('Am Homeless Checkbox'), 
    "p_3.5": Joi.boolean().describe('Not able to do community serice checkbox'), 
    "p_3.6": Joi.boolean().describe('Not paid LFO in timely manner'), 
    "p_3.7": Joi.boolean().describe('Optional'),
    p_ruleWithoutHearingCheckbox: Joi.boolean().describe('Rule without hearing checkbox'),
    p_telephoneHearing: Joi.boolean().describe('Telephone hearing checkbox'),
    videoHearing: Joi.boolean().describe('Video Hearing Checkbox'),
    p_inPersonHearing: Joi.boolean().describe('In person hearing checkbox'),
    p_haveAHearing: Joi.boolean().describe('Have a hearing checkbox'),
}