/**
* Created by BJ Rutledge
* Date: 2022-08-18
* Living with Conviction.org
* Form Object Schema 
* Schema for received form data object. 
**/

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
 *      p_3.3c is checked p_basicLivingExpenses poulated 
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
    p_causeNumberGoesHere: Joi.string().required().description('Cause number'),
    p_nameOnJS: Joi.string().required().description('Name on JNS'),
    p_dateOfBirth: Joi.date().required().description('Date of Birth'),
    p_pcnTcn: Joi.string().required().description('PCN / TCN'),
    p_sid: Joi.string().regex(/^\d+$/).description('SID'),
    p_publicAssistance: Joi.string().required().description('Public Assistance'),
    //Need  to test this to verify it works before applying rule to other 
    //checkboxes with dependencies. 
    p_basicLivingExpenses: Joi.string().when('p_3.3',{
        is: Joi.bool().valid(true).required(),
        then: Joi.valid(false),
        otherwise: Joi.string().required()
    }).description('Details for non payment').allow('').default(''),
    p_otherCompelling: Joi.string().description('Other compelling reasons').allow('').default(''),
    p_cantDoCommSvc: Joi.string().description('Reason for inability to do community service').allow('').default(''),
    p_notWillful: Joi.string().description('Reason for non payment').default(''),
    p_signedAtCity: Joi.string().required().description('Signed at City'),
    p_signedAtState: Joi.string().required().description('Signed at state'),
    p_signedOnDate: Joi.date().required().description('Signed on Date'),
    p_printName: Joi.string().required().description('Print Name'),
    p_myLegalNameIs: Joi.string().required().description('Legal Name'), 
    p_street: Joi.string().required().description('Street'),
    p_city: Joi.string().required().description('City'),
    p_state: Joi.string().required().description('State'),
    p_zip:  Joi.string().required().description('State'),
    p_myEmail:  Joi.string().email().required().description('Email'),
    p_ruleWithoutHearingCheckbox: Joi.bool().description('Rule without hearing Checkbox'),
    p_telephoneHearing: Joi.bool().description('Telephone hearing Checkbox'),
    videoHearing: Joi.bool().description('Video Hearing Checkbox'),
    p_inPersonHearing: Joi.bool().description('In person hearing Checkbox'),
    p_haveAHearing: Joi.bool().description('Have a hearing Checkbox'),
    "p_1.1": Joi.bool().description('LFO Interest Checkbox'),
    "p_1.2": Joi.bool().description('Restitution Interest Checkbox'), 
    "p_2.1": Joi.bool().description('Remission or Reduction Checkbox'), 
    "p_2.2": Joi.bool().description('Additional Time Checkbox'), 
    "p_2.3": Joi.bool().description('Collection Checkbox'), 
    "p_2.4": Joi.bool().description('Community Restitution Checkbox'), 
    "p_3.1": Joi.bool().description('Not paid in full Checkbox'), 
    "p_3.2": Joi.bool().description('Indigent because Checkbox'), 
    //verify that basic living expenses is populated. If populated then set the value, otherwise, thorw error
    "p_3.3": Joi.when('p_basicLivingExpenses', {
        //verify that text is gt 10 and lt 300 chars
        is: Joi.string().required(),
        then: Joi.valid(true),
        otherwise: Joi.bool().required()
    }).description('Public assistance Checkbox'), 
    "p_3.3b": Joi.bool().description('Annual Income LESS THAN poverty Checkbox'), 
    "p_3.3c": Joi.bool().description('Annual Income GREATER THAN poverty'), 
    "p_3.3d": Joi.bool().description('Other Compelling circumstances Checkbox'), 
    "p_3.3d": Joi.bool().description('Other Compelling Checkbox'), 
    "p_3.4": Joi.bool().description('Am Homeless Checkbox'), 
    "p_3.5": Joi.bool().description('Not able to do community serice Checkbox'), 
    "p_3.6": Joi.bool().description('Not paid LFO in timely manner'), 
    "p_3.7": Joi.bool().description('Optional'),
}


module.exports = Joi.object().keys(keys).unknown(); 