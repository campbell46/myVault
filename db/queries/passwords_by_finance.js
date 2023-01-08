const db = require('../connection');

const getPasswordsByFinance = () => {
  return db.query(`SELECT title, login, password FROM passwords WHERE organization_id = 1 AND category = 'Finance';`)
    .then(data => {
      return data.rows;
    })
    .catch((error => {
      console.log(error);
    }));
};

module.exports = { getPasswordsByFinance };