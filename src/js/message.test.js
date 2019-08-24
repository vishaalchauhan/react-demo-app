import React from 'react'
import {shallow} from 'enzyme'

import Message from '../js/message'

describe('<Message />', () => {
    test('render a single <p> tag', () => {
        const wrapper = shallow(<Message />)
        expect(wrapper.find('p')).toHaveLength(1)
    })
})
