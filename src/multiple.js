export function createMailObjMultiple (tmpName, subject, userInfo, mergeVars, important, lang, fromEmail, fromName) {
  return {
    template_name    : tmpName,
    template_content : [],
    message          : {
      subject        : subject,
      from_email     : fromEmail,
      from_name      : fromName,
      to             : userInfo,
      important      : important,
      merge          : true,
      merge_language : lang,
      merge_vars     : mergeVars,
    },
    async : false,
  };
}
