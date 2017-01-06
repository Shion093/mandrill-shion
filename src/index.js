import _ from 'lodash';
import { Mandrill } from 'mandrill-api/mandrill';
import { createMailObjMultiple} from './multiple';
import { formatVars } from './format';

let mandrillClient;

export function initialMailer (apiKey) {
  mandrillClient = new Mandrill(apiKey);
}

function sendEmail (mailObj) {
  return new Promise((resolve, reject) => {
    mandrillClient.messages.sendTemplate(mailObj, () => {
      resolve({sent : true});
    }, (err) => {
      console.log('ERROR! ', err);
      reject({sent : false});
    });
  });
}

export function sendMail ({template, subject, important, lang, variables, fromEmail, fromName}) {
  return new Promise((resolve, reject) => {
    let userInfo = [];
    let mergeVars = [];
    _.each(variables, (obj) => {
      const mailFormat = formatVars(obj);
      userInfo = [...userInfo, {
        email : mailFormat.userInfo.email,
        name  : mailFormat.userInfo.firstName,
        type  : 'to',
      }];
      mergeVars = [...mergeVars, {
        rcpt : mailFormat.userInfo.email,
        vars : mailFormat.mergeVars,
      }];
    });
    const mailObj = createMailObjMultiple(template, subject, userInfo, mergeVars, important, lang, fromEmail, fromName);
    sendEmail(mailObj).then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err);
    });
  });
}

