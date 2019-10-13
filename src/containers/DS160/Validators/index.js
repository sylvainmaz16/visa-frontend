import React, { Component } from 'react'
import moment from 'moment'
const validatePetitionNumber = (rule, value, callback, required = false) => {
  if (!value) {
      if(required)
          callback('This field is required');
      else
          callback();
      return;
  }
  let prefix = value.substring(0, 3)
  if( value.length != 13 || (prefix != 'WAC' && prefix != 'EAC' && prefix != 'SRC' && prefix != 'LIN') || /^\d{10}$/.test(value.substring(3)) == false){
      callback("The USCIS assigns a unique 13 digit alphanumeric number. There are 4 USCIS service centers to handle H1B applications. The first 3 character of your receipt signifies the particular service center, where the application is being processed. They can be any one of WAC, EAC, SRC, and LIN.");
      return;
  }
  callback();
};
const validateExplain = (rule, value, callback, field, required = false) => {
  if (!value) {
      if(required)
          callback('This field is required');
      else
          callback();
      return;
  }
  if(/^[A-Za-z0-9#$*%&;!@^?><().',\- ]*$/.test(value)== false){
      callback(field + " is invalid. Only the following characters are valid for this field: A-Z, a-z, 0-9, #, $, *, %, &, (;), !, @, ^, ?, >, <, parens (), period (.), apostrophe ('), comma (,), hyphen (-), and space.");
      return;
  }
  callback();
};

const validateParentBirthDate = (rule, value, callback, field, birthday, required = false) => {
    
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(!isValidDate(value))
    {
        callback('Invalid Date')
        return;
    }
    if(moment(birthday, 'DD/MMM/YYYY').diff(value) < 0){
        callback(field + ' must be earlier than your Date of Birth');
        return;
    }
    callback();
};
const validateSEVIS = (rule, value, callback, field) => {
    
    if (!value) {
      callback('This field is required');
    }
    if( value[0] != 'N' || /^\d{10}$/.test(value.substring(1)) == false) {
        callback(field + ' is invalid. Verify the format is correct.');
        return;
    }
    callback();
};
const validateProgramNumber = (rule, value, callback, field) => {
    
    if (!value) {
      callback('This field is required');
    }
    if( value.length != 9 || /^[a-zA-Z]-\d{1}-\d{5}/.test(value) == false) {
        callback(field + ' is invalid. Verify the format is correct.');
        return;
    }
    callback();
};
const validateDateYear = (rule, value, callback) => {
    
    if (!value) {
      callback('This field is required');
    }
    if(/^\d{4}$/.test(value)== false || parseInt(value) > 2500 || parseInt(value) < 1900) {
        callback('Invalid');
        return;
    }
    callback();
};
const validateVisaLostYear = (rule, value, callback, field, birthday) => {
    
    if (!value) {
      callback('This field is required');
    }
    if(/^\d{4}$/.test(value)== false || moment().year() < value || value < moment(birthday, 'DD/MMM/YYYY').year()) {
        callback(field + ' contains an invalid year.');
        return;
    }
    callback();
};
const formerSpouseNumberValidator = (rule, value, callback, length) => {
    console.log('on validator', value , length)
    if (!value) {
        callback('This field is required');
        return;
    }
    if(value != length) {
        callback('Number of former spouse is wrong');
        return;
    }
    callback();
}
const validateVisaNumber = (rule, value, callback, field) => {
    if (!value) {
      callback();
      return;
    }
    if(/^\d{8}$|^\d{12}$/.test(value)== false) {
      callback(field + ' that you have entered is invalid.');
      return;
    }
    callback();
};
const isValidDate = (value) => {
    const d = value
    const MONTH_LIST = { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11}
    if(!d || !d.isValid()) return false
    
    const terms = value.format('DD/MMM/YYYY').split('/')
    
    const day = terms[0]
    const month = terms[1]
    const year = terms[2]
    
    if(d.year() == year && d.month() == MONTH_LIST[month] && d.date() == parseInt(day))
        return true
    return false
}
const validateEarlierDate = (rule, value, callback, required = true) => {
    
    if (!value) {
        if( required )
            callback('This field is required');
        else
            callback()
        return;
    }
    if(!isValidDate(value))
    {
        callback('Invalid Date')
        return;
    }
    if (moment().diff(value) > 0 && !moment(value, 'DD/MMM/YYYY').isSame(moment(), 'day')) {
      callback();
      return;
    }
    callback('Date must be earlier than today');
};
const validateBetweenDate = (rule, value, callback, field, fromDate, required) => {
    
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(!isValidDate(value))
    {
        callback('Invalid Date')
        return;
    }
    if (moment().diff(value) < 0) {
      callback(field + ' cannot be later than today.');
      return;
    }
    if(moment(fromDate, 'DD/MMM/YYYY').diff(value) > 0){
        callback(field + ' cannot be earlier than From Date.');
        return;
    }
    callback();
};

const validateExpirationDate = (rule, value, callback, field, issuedDate) => {
    
    if (!value) {
      callback('This field is required');
      return;
    }
    if(!isValidDate(value))
    {
        callback('Invalid Date')
        return;
    }
    if (moment().diff(value) > 0) {
      callback(field + ' cannot be earlier than today.');
      return;
    }
    if(moment(issuedDate, 'DD/MMM/YYYY').diff(value) > 0){
        callback(field + ' cannot be earlier than Issued Date.');
        return;
    }
    callback();
};

const validatePreviousVisitdDate = (rule, value, callback, field, birthday) => {
    if (!value) {
      callback('This field is required');
      return;
    }
    if(!isValidDate(value))
    {
        callback('Invalid Date')
        return;
    }
    if (moment().diff(value) < 0 || moment(value, 'DD/MMM/YYYY').isSame(moment(), 'day')) {
      callback(field + ' cannot be equal to or later than today.');
      return;
    }
    if(moment(birthday, 'DD/MMM/YYYY').diff(value) > 0){
        callback(field + ' cannot be earlier than Date of Birth.');
        return;
    }
    callback();
};

const validateLastVisaIssuedDate = (rule, value, callback, field, birthday) => {
    if (!value) {
      callback('This field is required');
      return;
    }
    if(!isValidDate(value))
    {
        callback('Invalid Date')
        return;
    }
    if (moment().diff(value) < 0 || moment(value, 'DD/MMM/YYYY').isSame(moment(), 'day')) {
      callback(field + ' cannot be equal to or later than today.');
      return;
    }
    if(moment(birthday, 'DD/MMM/YYYY').diff(value) > 0){
        callback(field + ' cannot be earlier than Date of Birth.');
        return;
    }
    callback();
};
const validateLaterDate = (rule, value, callback, field) => {
    if (!value) {
      callback('This field is required');
      return;
    }
    if(!isValidDate(value))
    {
        callback('Invalid Date')
        return;
    }
    if (moment().diff(value) < 0) {
      callback();
      return;
    }
    callback(field + " cannot be equal to or earlier than today.");
};
const validateName = (rule, value, callback, field, required = true) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(/^[A-Za-z\s]+$/.test(value)== false) {
      callback(field + ' is invalid. Valid characters include A-Z and single spaces in between names.');
      return;
    }
    callback();
};
const validateLengthOfStay = (rule, value, callback, field) => {
    if (!value) {
      callback('This field is required');
      return;
    }
    if(/^\d{0,3}$/.test(value)== false) {
      callback(field + ' is invalid.');
      return;
    }
    callback();
};

const validateTelecodeName = (rule, value, callback, field) => {
    if (!value) {
      callback('This field is required');
      return;
    }
    if(/^\d{4}$/.test(value)== false) {
      callback(field + ' must only contain sets of four numbers separated by spaces');
      return;
    }
    callback();
};
const validateEmail = (rule, value, callback, field, required = false) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)== false) {
      callback(field + ' is invalid. Verify the format is correct.');
      return;
    }
    callback();
};

const validateSSN = (rule, value, callback, field) => {
    if (!value) {
      callback();
      return;
    }
    if(/^\d{9}$/.test(value)== false) {
      callback(field + ' accepts only numbers (0-9) and must be exactly nine (9) digits.');
      return;
    }
    callback();
};

const validateNumber = (rule, value, callback, field, required = false) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(/^\d+$/.test(value)== false) {
        callback(field + ' accepts only numbers (0-9)');
        return;
    }
    callback();
};

const validatePassport = (rule, value, callback, field, required = false) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(/^[a-zA-Z0-9 ]+$/.test(value)== false) {
        callback(field + ' is invalid. Only the following characters are valid for this field: A-Z, 0-9 and single spaces in between letters/numbers');
        return;
    }
    callback();
};

const validateSchoolName = (rule, value, callback, field, required = true) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(/^[a-zA-Z0-9 -'&]+$/.test(value)== false) {
        callback(field + ' is invalid. Only the following characters are valid for this field: A-Z, 0-9, hypen(-), apostrophe(\'), ampersand(&) and single spaces in between names');
        return;
    }
    callback();
};

const validateLeadingSpace = (rule, value, callback, field, required = true) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(value[0] == ' ') {
        callback(field + ' - leading spaces found in your entry.');
        return;
    }
    callback();
};

const validateUSZipCode = (rule, value, callback, field) => {
    console.log(value)
    if (!value) {
      callback();
      return;
    }
    if(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)== false) {
      callback(field + ' is invalid. Verify the format is correct.');
      return;
    }
    callback();
};

const ds160_validators = {
    validateName, 
    validateTelecodeName, 
    validateSSN,
    validateNumber,
    validateEarlierDate,
    validateLaterDate,
    validateLengthOfStay,
    validateUSZipCode,
    validateEmail,
    validateLastVisaIssuedDate,
    validateVisaNumber,
    validateVisaLostYear,
    validateExpirationDate,
    validateParentBirthDate,
    validateBetweenDate,
    validateExplain,
    validatePetitionNumber,
    validateSEVIS,
    validateProgramNumber,
    validatePreviousVisitdDate,
    validateDateYear,
    validatePassport,
    formerSpouseNumberValidator,
    validateSchoolName,
    validateLeadingSpace
}

export default ds160_validators
