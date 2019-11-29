import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';


describe('Test App component', ()=>{
    it('Should shallow render that App', done =>{
        const wrapper = shallow(<App />);
        expect(wrapper).toHaveLength(1);
        done();
    })
})