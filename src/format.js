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


const vars1 = [
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