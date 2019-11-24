import * as types from './types';
import * as courseApi from '../../api/courseApi';
import { beginApiCall } from "./apiStatusAction";

export  function createCourseSuccessfully(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course}
}
export  function updateCourseSuccessfully(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course}
}

export function loadCoursesSuccessfully(courses){
    return { type: types.LOAD_COURSES_SUCCESS, courses}
}


export function loadCourses(){
    return function (dispatch){
        dispatch(beginApiCall());
        return courseApi.getCourses().then((courses)=>{
            dispatch(loadCoursesSuccessfully(courses))
        }).catch(error => {
            throw error
        });
    }
}

export function saveCourse(course){
    return function (dispatch){
        dispatch(beginApiCall());
        return courseApi.saveCourse(course).then((savedCourse)=>{
            course.id ? dispatch(updateCourseSuccessfully(savedCourse)) : dispatch(createCourseSuccessfully(savedCourse))
        }).catch(error=>{
            throw error;
        })
    }
}