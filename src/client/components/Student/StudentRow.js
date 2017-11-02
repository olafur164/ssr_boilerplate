import React, { Component } from 'react'

class StudentList extends Component {
  render () {
    return (
      <tr>
        <th>id</th>
        <td></td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#callStudent" data-placement="top" title="Call <?=$student['id']?>"><i class="fa fa-phone" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#editStudent" data-id="<?=$student['id']?>" data-firstname="<?=$student['first_name']?>" data-lastname="<?=$student['last_name']?>" data-email="<?=$student['email']?>" data-phone="<?=$student['phonenumber']?>" data-student-id="<?=$student['student_id']?>" data-placement="top" title="Edit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#removeStudent" data-id="<?=$student['id']?>" data-placement="top" title="Delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
          </div>
        </td>
      </tr>
    )
  }
}
export default StudentList
