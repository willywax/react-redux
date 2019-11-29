import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../components/PageNotFound';

describe('Test PageNotFound Component', ()=>{
    it('Should render Page Not Found Component with shallow', done =>{
        const wrapper = shallow(<PageNotFound />);
        expect(wrapper).toHaveLength(1);
        done();
    })
})