// users-model.js - A mongoose model
//
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "users";
  const mongooseClient = app.get("mongooseClient");
  const schema = new mongooseClient.Schema(
    {
      email: { type: String, unique: true, lowercase: true },
      password: {
        type: String,
        validate: {
          validator: function (password) {
            // Password should be at least 8 characters long
            // and contain at least one uppercase letter and one special character
            const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
            return passwordRegex.test(password);
          },
          message:
            "Password should be at least 8 characters long and contain at least one uppercase letter and one special character.",
        },
      },
      fullName: { type: String },
      rollNumber: { type: String },
      department: { type: String },
      degree: { type: String },
      section: { type: String },
      subjects: { type: Array }, // teacher subjects
      groupid: { type: String },
      scheduleid: { type: String, default: "6300bb4f87a76cfb6b179e7f" },
      role: { type: Number },
      // role 0 = admin  role 1= supervisor role 2 = student
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
