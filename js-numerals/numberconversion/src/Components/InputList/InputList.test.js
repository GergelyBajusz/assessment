import React from 'react'
import { shallow } from 'enzyme'
import InputList from './InputList'


/* 7       === seven
42      === forty-two
1999    === one thousand nine hundred and ninety-nine
2001    === two thousand and one
17999   === seventeen thousand nine hundred and ninety-nine
342251  === three hundred and forty-two thousand two hundred and fifty-one
1300420 === one million three hundred thousand four hundred and twenty */


describe('<InputList /> with other props', () => {
it("InputList Renders", () => {
  shallow(<InputList />)
})

it("Includes two Inputfields", () => {
      const wrapper = shallow(<InputList/>)
      expect(wrapper.find("#numberInputField").length).toEqual(1)
  })
})

describe('input can be populated with a value', () => {
    const wrapper = shallow(<InputList/>)
    const inputvalue = 1
    const event = {target: {type: "number", value: inputvalue}};
    beforeEach(() => {
        let input = wrapper.find("#numberInputField")
        input.prop('handleChange')(event)
    })
    it(`the input value changed to ${inputvalue}`, ()=> {
        const inputField = wrapper.find("#numberInputField")
        expect(inputField.props().value).toBe(inputvalue)
    })
})

describe('output displays data correctly', () => {
    const wrapper = shallow(<InputList/>)
    console.log(wrapper.debug())
    const outputField= wrapper.find("#numberOutputField")
    it('has the initial state of undefined', () => {
        expect(outputField.props().value).toBe("");
      })
})