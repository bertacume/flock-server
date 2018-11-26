

export default {
  Query    : {
    user     : (_, { id }, { User }) => User.findOne({ id: Number(id) }),
    allUsers : (_, __, { User }) => User.find()
  },

  Mutation : {
    updateUser : (_, { input: { id, ...update } }, { User }) => User.updateOne(id, update),
    createUser : (_, {input: {firstName, lastName, email, avatar_url}}, { User }) => User.create({
      firstName,
      lastName,
      email,
      avatar_url
    }),

  }


  // User : {
  //   trips : ({ id }, _, { Trip }) => Trip.find({ participants: id })
  // }
};
