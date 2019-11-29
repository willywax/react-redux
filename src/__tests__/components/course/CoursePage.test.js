import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { courses, authors } from '../../../__mock__/index';

import CoursePage from '../../../components/courses/CoursesPage';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Test CourePage Component', ()=>{

    it('Should shallow mount the page', done =>{
        const store = mockStore({
            authors: authors,
            courses: courses
        });
        const wrapper = shallow(<CoursePage store={store} />);
        expect(wrapper).toHaveLength(1);

        done();
    })

    it('Should shallow mount the page with empty authors', done =>{
        const store = mockStore({
            authors: [],
            courses: courses
        });

        const wrapper = shallow(<CoursePage store={store} />);
        expect(wrapper).toHaveLength(1);

        done();
    })

    it('Should shallow mount the page with empty authors and empty courses', done =>{
        const store = mockStore({
            authors: [],
            courses: []
        });

        const actions = {
            loadAuthors: jest.fn(),
            loadCourses: jest.fn()
        }
        const wrapper = mount(<CoursePage store={store} actions={actions} courses={[]} authors={[]} />);
        expect(wrapper).toHaveLength(1);

        done();
    })

    it('Should simulate click of Add course button',done =>{
        const store = mockStore({
            authors: [],
            courses: []
        });

        const actions = {
            loadAuthors: jest.fn(),
            loadCourses: jest.fn()
        }
        const wrapper = mount(
            <Router>
                <CoursePage store={store} actions={actions} courses={[]} authors={[]} />
            </Router>
            );

        wrapper.find('#add-course').simulate('click');

        console.debug(wrapper.instance().state);
        expect(wrapper.instance().state).equal({ redirectToCourseForm: true});

        done();
    })

})



// it('Should shallow mount the page with empty authors and empty courses and throw error when getting authors', done =>{
//     const store = mockStore({
//         authors: [],
//         courses: []
//     });

//     let loadAuthorError = jest.fn().mockImplementation(() => {
//         throw new Error('no authors');
//       });

//     const actions = {
//         loadAuthors: loadAuthorError,
//         loadCourses: jest.fn()
//     }
//     const wrapper = mount(<CoursePage store={store} actions={actions} courses={[]} authors={[]} />);
//     expect(wrapper).toHaveLength(1);

//     done();
// })