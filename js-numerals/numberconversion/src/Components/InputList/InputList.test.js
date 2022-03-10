import React from 'react'
import { shallow } from 'enzyme'
import InputList from './InputList'

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
    const outputField= wrapper.find("#numberOutputField")
    it('has the initial state of undefined', () => {
        expect(outputField.props().value).toBe("");
      })
})
