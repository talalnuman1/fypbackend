// schedule-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "schedule";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      supervisor: { type: Array, required: true }, // ['start date string',''end date string"]
      proposal: { type: Array, required: true }, // ['start date string',''end date string"]
      srs: { type: Array, required: true }, // ['start date string',''end date string"]
      middefence: { type: Array, required: true }, // ['start date string',''end date string"]
      finaldefence: { type: Array, required: true }, // ['start date string',''end date string"]
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
