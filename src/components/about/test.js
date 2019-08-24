import React from 'react'
import {shallow} from 'enzyme'

import About from './index'

describe('<About />', () => {
    test('render a single <p> tag', () => {
        const wrapper = shallow(<About />)
        expect(wrapper.find('p')).toHaveLength(2)
    })
})
