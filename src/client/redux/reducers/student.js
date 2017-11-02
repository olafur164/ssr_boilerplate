import axios from 'axios'

const DEFAULT_STATE = {
  students: []
}

// ******* Action Types *******

const ADD_STUDENT= 'ADD_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const GET_STUDENT_LIST = 'GET_STUDENT_LIST'

// ******* Action Creators & Reducers *******

export function fetchStudentList () {
  return dispatch => {
    return axios.get(`http://localhost:4000/api/student`).then(students => {
      dispatch(getStudentList(students.data))
    })
  }
}
export const getStudentList = json => {
	return {
    type: GET_STUDENT_LIST,
		students: json.students.map(obj => obj)
	}
}

const getStudentListReducer = (state, action) => {
  return Object.assign({}, state, {
    students: action.students
  })
}

// ******* Root Reducer Slice *******

export default function student (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_STUDENT_LIST:
      return getStudentListReducer(state, action)
    default:
      return state
  }
}
