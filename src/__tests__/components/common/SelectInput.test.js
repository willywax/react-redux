import React from 'react';
import { shallow } from 'enzyme';
import SelectInput from '../../../components/common/SelectInput';

describe('Test Select Component', ()=>{
    it('Should render select component',done =>{
        const props = {
            name: 'gender',
            label: 'Select Gender',
            onChange: jest.fn(),
            defaultOption: 'food',
            options: ['food','water','technology'],
            error: {name:'Error occured'}
        }
        const wrapper = shallow(<SelectInput {...props} />);
        expect(wrapper).toHaveLength(1);

        done();
    });
});
