import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/home/HomePage';


describe('Test HomePage ', ()=>{
    it('By rendering page with shallow', done=>{
        const wrapper = shallow(<HomePage />);
        expect(wrapper).toHaveLength(1);

        done();
    });
});

