import React from 'react'
import {shallow} from 'enzyme'

import Notfound from './index'

describe('<Notfound />', () => {
    test('render a single <h1> tag', () => {
        const wrapper = shallow(<Notfound />)
        expect(wrapper.find('h1')).toHaveLength(1)
    })
})
