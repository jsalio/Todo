import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../../../components/Calculator/Calculator';

describe('Calculator', () => {
    let wrapper: any;

    beforeEach(() => wrapper = shallow(<Calculator />));

    it('should render correctly', () => expect(wrapper).toMatchSnapshot())

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
});