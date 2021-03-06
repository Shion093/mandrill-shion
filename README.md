## Example

```sh
 import {sendMail, initialMailer} from 'mandrill-shion';

  // Initialize your Mandrill Api with your api key
  initialMailer('YOUR_API_KEY');
  
  export default class SendExample {
  
    async sendMailExample (req, res) {
      try {
       
        const variables = [
          {
            items     : ['hola', 'hello'],
            date      : 'today',
            email     : 'example@example.com',
            firstName : 'Juan',
          },
          ...
        ];
  
        const mail = await sendMail({
          template  : 'YOUR_TEMPLATE_NAME',
          subject   : 'YOUR_SUBJECT',
          important : true, 
          lang      : 'handlebars', 
          variables : variables,
          fromEmail : 'hello@example.com', 
          fromName  : 'SUP YOOO!' 
        });
        
       ...
       
```


## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install mandrill-shion --save
```

## Usage

### Methods
#### initialMailer(apiKey)
Type : `string`

Initialize the Mandrill API with your API KEY.

#### sendMail(options)
Type : `object`

Sends the email, returns a promise.

#### Options
##### template 
Type : `string`

Name of template on Mandrill, you can found this on 'Template Slug', inside 'Templates' tab.

##### subject 
Type : `string`

Subject to appear on email.

#### important
Type : `boolean`

If it's important or not, accepts true/false.

#### lang
Type : `string`

Language of template, handlebars/mandrill.

#### variables
Type : `array`

All variables, it must contain `email` and `firstName` this is used to know where to sent the email.

#### fromEmail
Type : `string`

Email to appear as sender.

#### fromName
Type : `string`

Name to appear as sender.

## License

MIT ©


