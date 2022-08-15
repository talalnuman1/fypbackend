const users = require('./users/users.service.js');
const groups = require('./groups/groups.service.js');
const requests = require('./requests/requests.service.js');
const schedule = require('./schedule/schedule.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(groups);
  app.configure(requests);
  app.configure(schedule);
};
