import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import Calculator from '../../components/Calculator/Calculator';

describe('App', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').length).toEqual(1);
    });
});

describe('App2', () => {
    let wrapper: any;

    beforeEach(() => wrapper = shallow(<App />));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the Calculator Component', () => {
        expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
    })
})