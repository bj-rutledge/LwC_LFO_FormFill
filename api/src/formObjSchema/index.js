/**
* Created by BJ Rutledge
* Date: 2022-08-18
* Living with Conviction.org
* Form Object Schema 
* Schema for received form data object. 
**/

const Joi = require('joi');

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

const keys = {
    p_superiorGoesHere: Joi.string().required().description('Name of superior court'),
    p_countyGoesHere: Joi.string().required().valid(...counties).description('Name of county'),
    
}