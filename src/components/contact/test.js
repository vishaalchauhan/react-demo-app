import React from 'react'
import {shallow} from 'enzyme'

import Contact from './index'

describe('<Contact />', () => {
    test('render a single <p> tag', () => {
        const wrapper = shallow(<Contact />)
        expect(wrapper.find('p')).toHaveLength(2)
    })
})
