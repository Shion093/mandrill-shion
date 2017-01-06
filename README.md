## Example

```sh
$ import {sendMail, initialMailer} from 'mandrill-shion';

  // Initialize your Mandrill Api with your api key
  initialMailer('YOUR_API_KEY');
  
  export default class SendExample {
  
    async sendMailExample (req, res) {
  
      try {
        // Variables must contain firstName and email, this is used to know where to send the email.
        // Accepts 1 to n variables, but it must be an array. 
        const variables = [
          {
            items     : ['hola', 'hello'],
            date      : 'today',
            email     : 'example@example.com',
            firstName : 'Juan',
          },
          {
            items     : ['hola', 'hello'],
            date      : 'today',
            email     : 'example1@example1.com',
            firstName : 'Juan Jose',
          },
          {
            items     : ['hola', 'hello'],
            date      : 'today',
            email     : 'example2@example2.com',
            firstName : 'Pancho',
          },
        ];
  
        const mail = await sendMail({
          template  : 'YOUR_TEMPLATE_NAME',
          subject   : 'YOUR_SUBJECT',
          important : true, // if it's important : false/true
          lang      : 'handlebars', // language of the template, mandrill/handlebars
          variables : variables, // all your variables
          fromEmail : 'hello@example.com', // email to appear in the email from where it was sent. 
          fromName  : 'SUP YOOO!' // name to appear in the email from where it was sent
        });
        
       ...
       
      } catch (err) {
      
        ....
        
      }
    }
  }
```


## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install mandrill-shion --save
```

## Usage
