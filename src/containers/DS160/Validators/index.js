import React, { Component } from 'react'
import moment from 'moment'

const validateEarlierDate = (rule, value, callback) => {
    if (!value) {
      callback('This field is required');
    }
    if (moment().diff(value) > 0 && !moment(value).isSame(moment(), 'day')) {
      callback();
    }
    callback('Date must be earlier than today');
};
const validateLaterDate = (rule, value, callback, field) => {
    if (!value) {
      callback('This field is required');
    }
    if (moment().diff(value) < 0) {
      callback();
    }
    callback(field + " cannot be equal to or earlier than today.");
};
const validateName = (rule, value, callback, field) => {
    if (!value) {
      callback('This field is required');
    }
    if(/^[A-Za-z\s]+$/.test(value)== false) {
      callback(field + ' is invalid. Valid characters include A-Z and single spaces in between names.');
    }
    callback();
};

const validateLengthOfStay = (rule, value, callback, field) => {
    if (!value) {
      callback('This field is required');
    }
    if(/^\d{0,3}$/.test(value)== false) {
      callback(field + ' is invalid.');
    }
    callback();
};

const validateTelecodeName = (rule, value, callback, field) => {
    if (!value) {
      callback('This field is required');
    }
    if(/^\d{4}$/.test(value)== false) {
      callback(field + ' must only contain sets of four numbers separated by spaces');
    }
    callback();
};
const validateEmail = (rule, value, callback, field, required = false) => {
    if (!value) {
        if(required)
            callback('This field is required');
        callback();
    }
    if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)== false) {
      callback(field + ' is invalid. Verify the format is correct.');
    }
    callback();
};

const validateSSN = (rule, value, callback, field) => {
    if (!value) {
      callback();
    }
    if(/^\d{9}$/.test(value)== false) {
      callback(field + ' accepts only numbers (0-9) and must be exactly nine (9) digits.');
    }
    callback();
};

const validateNumber = (rule, value, callback, field, required = false) => {
    if (!value) {
        if(required)
            callback('This field is required');
        callback();
    }
    if(/^\d+$/.test(value)== false) {
        callback(field + ' accepts only numbers (0-9)');
    }
    callback();
};

const validateUSZipCode = (rule, value, callback, field) => {
    if (!value) {
      callback();
    }
    if(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)== false) {
      callback(field + ' is invalid. Verify the format is correct.');
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
    validateEmail
}

export default ds160_validators
