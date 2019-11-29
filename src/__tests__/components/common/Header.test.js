import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/common/Header';

describe('Test Header Component', ()=>{
    it('Should render header',done =>{
        const wrapper = shallow(<Header />);
        expect(wrapper).toHaveLength(1);

        done();
    });
});

