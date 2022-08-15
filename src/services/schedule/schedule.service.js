// Initializes the `schedule` service on path `/schedule`
const { Schedule } = require('./schedule.class');
const createModel = require('../../models/schedule.model');
const hooks = require('./schedule.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/schedule', new Schedule(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('schedule');

  service.hooks(hooks);
};
