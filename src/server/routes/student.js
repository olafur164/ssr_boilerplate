const express = require('express')
const Student = require('../db/models/Student')
const router = express.Router()

/**
 * GET '/api/user/'
 *
 * Gets a logged in user's username, email, password
 */

router.get('/', (req, res) => {
  Student.find().lean().exec((err, students) => res.json(
    { students: students.map(student => ({
        student
      }))
    }
  ))
})

router.post('/add', (req, res) => {
  const student = new Student({
    first_name: 'Ólafur Hólm',
    last_name: 'Eyþórsson',
    student_id: 1710943059,
    email: 'olafurholm17@gmail.com',
    phone: 8688794
  })
  return student
    .save()
    .then(student => {
      return { newStudent: student }
    })
    .catch(err => {
      console.error('student.js: saveNewStudent failed', err)
      return { error: err }
    })

})
module.exports = router
