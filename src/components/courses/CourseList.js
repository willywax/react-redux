import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

const CourseList = ({ courses }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Watch</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {courses.map(course => {
        return (
          <tr key={course.slug}>
            <td>
              <a
                className="btn btn-light"
                href={
                  "https://www.pluralsight.com/courses/react-redux-react-router-es6" +
                  course.slug
                }
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: Proptypes.array.isRequired
};

export default CourseList;
