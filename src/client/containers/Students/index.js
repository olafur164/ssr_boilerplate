import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchStudentList } from '../../redux/reducers/student'
import PropTypes from 'prop-types'

class Students extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    console.log("test");
    this.props.dispatchGetStudentList()
  }
  render () {
    console.log(this.props.students)
    return (
      <div>
        <Helmet>
          <title>Students</title>
        </Helmet>
        <h1>Students</h1>
      </div>
    )
  }
}
Students.propTypes = {
  students: PropTypes.array,
  dispatchGetStudentList: PropTypes.func,
}

const mapStateToProps = state => {
  console.log(state);
  return {
    students: state.student.students
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetStudentList () {
      dispatch(fetchStudentList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)

