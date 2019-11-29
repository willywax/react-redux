import React from 'react';
import { connect } from "react-redux";
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Redirect } from "react-router-dom";
import CourseList from './CourseList';
import Spinner from '../common/Spinner';

class CoursePage extends React.Component {
    state = {
        redirectToCourseForm: false
    }

    componentDidMount(){
        const { actions, courses, authors } = this.props;
        if(courses.length === 0){
            actions.loadCourses().catch(error=>{
                alert("Loading courses Failed ", error);
            })
        }

        if(authors.length === 0){
            actions.loadAuthors().catch(error=>{
                alert("Loading authors Failed ", error);
            })
        }

    }

    render() {
        return (
            <>
             {this.state.redirectToCourseForm && <Redirect to="/course" />}
                <button id="add-course" className='btn btn-primary'
                     onClick={()=>{
                         this.setState({redirectToCourseForm: true})
                     }}
                >Add Course
                </button>
                <h2>Course List</h2>
                {this.props.loading ? <Spinner /> : (
                     <CourseList courses={this.props.courses} />
                )}
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        courses: state.authors.length === 0 ? [] : state.courses.map(course =>{
            return {
                ...course,
                authorName: state.authors.find(a => a.id === course.authorId).name
            }
        }),
        authors: state.authors,
        loading: state.apiCalls > 0
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    };
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
