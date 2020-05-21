import React, { Component } from "react";
import StudentCard from "./StudentCard";
const axios = require("axios");

class StudentList extends Component {
  state = {
    students: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchStudents();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentBlock !== this.props.currentBlock) {
      this.fetchStudents();
    }
  }

  render() {
    if (this.state.loading) return <h3>Loading...</h3>;
    return (
      <main className="Grid">
        {" "}
        {this.state.students.map((student) => {
          return <StudentCard key={student._id} {...student} />;
        })}
      </main>
    );
  }

  fetchStudents = () => {
    const { currentBlock } = this.props;
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students", {
        params: {
          block: currentBlock,
        },
      })
      .then(({ data }) => {
        this.setState({ students: data.students, isLoading: false });
      });
  };
}

export default StudentList;
