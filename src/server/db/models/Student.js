const mongoose = require('mongoose')
//const findOrCreate = require('mongoose-findorcreate')

const StudentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  student_id: {
    type: Number,
    unique: true,
  },
  email: String,
  phone: Number
})

//StudentSchema.plugin(findOrCreate)

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student