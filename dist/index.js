'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialMailer = initialMailer;
exports.sendSingle = sendSingle;
exports.createMailObjMultiple = createMailObjMultiple;

var _mandrill = require('mandrill-api/mandrill');

var _single = require('./single');

var mandrillClient = void 0;

function initialMailer(apiKey) {
  console.log(apiKey);
  mandrillClient = new _mandrill.Mandrill(apiKey);
}

function sendSingle(email, name) {
  console.log(hola);
  var mailObj = (0, _single.createMailObj)('dnamic-catalog', 'test from npm', email, name, true, 'handlebars');
  sendEmail(mailObj).then(function (result) {
    console.log(result);
    return result;
  });
}

function createMailObjMultiple(tmpName, subject, userInfo, mergeVars, important, lang) {
  return {
    template_name: tmpName,
    template_content: [],
    message: {
      subject: subject,
      from_email: 'no-reply@dnamicworld.com',
      from_name: 'dnamicworld',
      to: userInfo,
      important: important,
      merge: true,
      merge_language: lang,
      merge_vars: mergeVars
    },
    async: false
  };
}

function sendEmail(mailObj) {
  return new Promise(function (resolve, reject) {
    mandrillClient.messages.sendTemplate(mailObj, function () {
      resolve({ sent: true });
    }, function (err) {
      console.log(err);
      reject({ sent: false });
    });
  });
}