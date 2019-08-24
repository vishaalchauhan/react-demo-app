import React from 'react'
import {shallow} from 'enzyme'

import Navigation from './index'

describe('<Navigation />', () => {
    test('render a single <p> tag', () => {
        const wrapper = shallow(<Navigation />)
        // expect(wrapper.find('p')).toHaveLength(2)
    })
})
