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

/**
 * GET '/api/user/username/:username'
 *
 * Checks a given username for uniqueness. If the username passed
 * exists, isUnique will be false, otherwise true
 *
 * @returns { isUnique: bool }
 */

router.get('/student/:student_id', (req, res) => {
  const student_id = req.params.student_id
  verifyUniqueStudentID(student_id)
    .then(result => res.json(result))
    .catch(err => {
      console.error('verifyUniqueUsername failed:', err)
      return res.status(500).json({ error: err })
    })
})

module.exports = router
