import React from 'react'
import {shallow} from 'enzyme'

import Product from './index'

describe('<Product />', () => {
    test('render a single <p> tag', () => {
        const wrapper = shallow(<Product />)
        expect(wrapper.find('p')).toHaveLength(2)
    })
})
