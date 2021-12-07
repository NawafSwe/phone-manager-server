const userModel = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
        name: {
          bsonType: "string",
          description: "name Must be a string and it is required",
        },
        numbers: {
          bsonType: [
            {
              bsonType: "string",
              description: "name Must be a string and it is required",
            },
          ],
          description: "numbers must be array of numbers",
        },
      },
    },
  },
};

module.exports = { userModel };
