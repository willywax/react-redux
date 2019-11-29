import React from 'react';
import { shallow } from 'enzyme';
import InputText from '../../../components/common/TextInput';

describe('Test Text Input Component', ()=>{
    it('Should render input component without error',done =>{
        const props = {
            name: 'firstName',
            label: 'firstName',
            onChange: jest.fn(),
            placeHolder: 'Enter First Name',
            value: 'Willywax',
        }
        const wrapper = shallow(<InputText {...props} />);
        expect(wrapper).toHaveLength(1);

        done();
    });

    it('Should render input component with error',done =>{
        const props = {
            name: 'firstName',
            label: 'firstName',
            onChange: jest.fn(),
            placeHolder: 'Enter First Name',
            value: 'Willywax',
            error: [{name: 'Not valid value'}, {valid: 'Validation error'}]
        }
        const wrapper = shallow(<InputText {...props} />);
        expect(wrapper).toHaveLength(1);

        done();
    });
});
