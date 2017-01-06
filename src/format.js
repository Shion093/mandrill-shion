import _ from 'lodash';

export function formatVars (vars) {
  const mergeVars = _.map(vars, (item, index) => {
    return {
      name    : index,
      content : item,
    };
  });
  const userInfo = {
    email     : vars.email,
    firstName : vars.firstName,
  };
  return {mergeVars, userInfo};
}
