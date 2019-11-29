import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../../../components/about/AboutPage';

describe('Test About Page Rendering',() =>{
    it('Should render page', done =>{
        const wrapper = shallow(<AboutPage /> );

        expect(wrapper).toHaveLength(1);

        done();
    })
})