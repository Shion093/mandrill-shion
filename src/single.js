export function createMailObj (tmpName, subject, email, firstName, important, lang) {
  return {
    template_name    : tmpName,
    template_content : [{
      "name": "example name",
      "content": "example content"
    }],
    message          : {
      subject    : subject,
      from_email : 'no-reply@dnamicworld.com',
      from_name  : 'dnamicworld',
      to         : [{
        email : email,
        name  : firstName,
        type  : 'to',
      }],
      important         : important,
      merge             : true,
      merge_language    : lang,
    },
    async : false,
  };
}
