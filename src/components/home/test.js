import React from 'react'
import {shallow} from 'enzyme'

import Home from './index'

describe('<Home />', () => {
    test('render a single <p> tag', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.find('p')).toHaveLength(3)
    })
})
