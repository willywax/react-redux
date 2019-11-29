import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../../components/common/Spinner';

describe('Test Header Component', ()=>{
    it('Should render header',done =>{
        const wrapper = shallow(<Spinner />);
        expect(wrapper).toHaveLength(1);

        done();
    });
});