import { Mandrill } from 'mandrill-api/mandrill';
import { createMailObj } from './single';

let mandrillClient;

export function initialMailer (apiKey) {
  console.log(apiKey);
  mandrillClient = new Mandrill(apiKey);
}

export function sendSingle (hola) {
  console.log(hola);
  const mailObj = createMailObj('dnamic-catalog', 'test from npm', 'shion093@gmail.com', 'Alex', true, 'handlebars');
  sendEmail(mailObj).then((result)=> {
    console.log(result);
    return result;
  });
}


export function createMailObjMultiple (tmpName, subject, userInfo, mergeVars, important, lang) {
  return {
    template_name    : tmpName,
    template_content : [],
    message          : {
      subject        : subject,
      from_email     : 'no-reply@dnamicworld.com',
      from_name      : 'dnamicworld',
      to             : userInfo,
      important      : important,
      merge          : true,
      merge_language : lang,
      merge_vars     : mergeVars,
    },
    async : false,
  };
}

function sendEmail (mailObj) {
  return new Promise((resolve, reject) => {
    mandrillClient.messages.sendTemplate(mailObj, () => {
      resolve({sent : true});
    }, (err) => {
      console.log(err);
      reject({sent : false});
    });
  });
}

