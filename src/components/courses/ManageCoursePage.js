import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import CourseForm from './CourseForm';
import { newCourse } from "../../__mock__";
import { toast } from "react-toastify";

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses, saveCourse, history,...props }){
  const [course, setCourse] = useState({...props.course});
  const [errors, setError] = useState();
  const [saving, setSaving] = useState(false);

  useEffect(()=>{
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert(`Failed to load courses ${error}`);
      });
    }else {
      setCourse({...props.course})
    }
    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert(`Failed to load authors ${error}`);
      });
    }
  }, [props.course])

  function handleChange(event){
    const {name , value} = event.target;
    setCourse({
      ...course,
      [name]: name === 'authorId' ? parseInt(value, 10) : value
    })
  }

  function handleSave(event){
    event.preventDefault();
    setSaving(true);
    saveCourse(course).then(()=>{
      toast.success('Course saved');
      history.push('/courses')
    })
  }

    return (
      <>
        <CourseForm
          course={course}
          authors={authors}
          onChange={handleChange}
          onSave={handleSave}
          saving={saving}
          errors={errors}
          />
      </>
    );
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

function getCourseBySlug(courses, slug) {
    return courses.find(course => course.slug === slug || null)
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const slug = ownProps.match.params.slug;
  const course = slug && state.courses.length > 0 ? getCourseBySlug(state.courses, slug) : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors
  };
}


const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
