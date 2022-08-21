/**
 * Created by BJ Rutledge
 * Date:2022-08-19
 * Living with Conviction.org
 **/


//valid form that follows all the rules set. 
module.exports.validForm = validForm = {

  p_superiorGoesHere: "King County Superior Court",
  p_countyGoesHere: "King",
  p_stateOfWaGoesHere: "State of Washington",
  p_causeNumberGoesHere: "03-12123-123SA",
  p_nameOnJS: "The Dude",
  p_dateOfBirth: new Date(1977, 4, 11).toString(),
  p_pcnTcn: "2333",
  p_sid: "12347",
  p_publicAssistance: "Need public assistance",
  //Need  to test this to verify it works before applying rule to other
  //checkboxes with dependencies.
  p_basicLivingExpenses: "Lots of expenses",
  p_otherCompelling: "Many reasons",
  p_cantDoCommSvc: "I am busy",
  p_notWillful: "Not willful",
  p_signedAtCity: "seattle",
  p_signedAtState: "WA",
  p_signedOnDate: new Date(Date.now()).toDateString(),
  p_printName: "The Dude",
  p_myLegalNameIs: "The Dude",
  p_street: "1234 My Street",
  p_city: "Seattle",
  p_state: "WA",
  p_zip: "98121",
  p_myEmail: "email@email.com",
  p_ruleWithoutHearingCheckbox: true,
  p_telephoneHearing: false,
  videoHearing: false,
  p_inPersonHearing: false,
  p_haveAHearing: false,
  "p_1.1": true,
  "p_1.2": true,
  "p_2.1": true,
  "p_2.2": true,
  "p_2.3": true,
  "p_2.4": true,
  "p_3.1": true,
  "p_3.2": false,
  //verify that basic living expenses is populated. If populated then set the value, otherwise, thorw error
  "p_3.3": true,
  "p_3.3b": true,
  "p_3.3c": true,
  "p_3.3d": true,
  "p_3.3d": true,
  "p_3.4": true,
  "p_3.5": true,
  "p_3.6": true,
  "p_3.7": true,
};

//Invalid form NO date in date of birth 
module.exports.invalidForm =  invalidForm = {

  p_countyGoesHere: "King",
  p_stateOfWaGoesHere: "State of Washington",
  p_causeNumberGoesHere: "03-12123-123SA",
  p_nameOnJS: "The Dude",
  p_dateOfBirth: 'adfsd',//INVALID DATA NO DATE
  p_pcnTcn: "2333",
  p_sid: "12347",
  p_publicAssistance: "Need public assistance",
  //Need  to test this to verify it works before applying rule to other
  //checkboxes with dependencies.
  p_basicLivingExpenses: "Lots of expenses",
  p_otherCompelling: "Many reasons",
  p_cantDoCommSvc: "I am busy",
  p_notWillful: "Not willful",
  p_signedAtCity: "seattle",
  p_signedAtState: "WA",
  p_signedOnDate: {},
  p_printName: 2,
  p_myLegalNameIs: {},
  p_street: "1234 My Street",
  p_city: "Seattle",
  p_state: "WA",
  p_zip: "98121",
  p_myEmail: "email@email.com",
  p_ruleWithoutHearingCheckbox: true,
  p_telephoneHearing: false,
  videoHearing: false,
  p_inPersonHearing: false,
  p_haveAHearing: false,
  "p_1.1": true,
  "p_1.2": true,
  "p_2.1": true,
  "p_2.2": true,
  "p_2.3": true,
  "p_2.4": true,
  "p_3.1": true,
  "p_3.2": false,
  //verify that basic living expenses is populated. If populated then set the value, otherwise, thorw error
  "p_3.3": true,
  "p_3.3b": true,
  "p_3.3c": true,
  "p_3.3d": true,
  "p_3.3d": true,
  "p_3.4": true,
  "p_3.5": true,
  "p_3.6": true,
  "p_3.7": true,
};
