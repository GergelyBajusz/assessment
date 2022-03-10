import {useState, useEffect } from 'react'
import {
    getOneDigitNumber,
    getTwoDigitNumber,
    getThreeDigitNumber,
    getFourDigitNumber,
    getFiveDigitNumber,
    getSixDigitNumber,
    getSevenDigitNumber
    } from '../helpers/getNumber'

export const useInputList = () => {

const [inputValue, setInputValue] = useState('')
const [outputValue, setOutputValue] = useState('')
const [arrValue, setArrValue] = useState([])

const handleInputChange = (e) => {
    setInputValue(e.target.value)
    setArrValue([parseInt(e.target.value)])
}

useEffect(() => {
    if(arrValue.length > 0) {
       const output = arrValue.map(item => {
           if (item <= 13) {
            return getOneDigitNumber(item)
           }
           if (item > 13 && item < 100) {
               return getTwoDigitNumber(item)
           }
           if (item >= 100 && item < 1000) {
            return getThreeDigitNumber(item)
           }
           if (item >= 1000 && item < 10000) {
            return getFourDigitNumber(item)
           }
           if (item >= 10000 && item < 100000) {
            return getFiveDigitNumber(item)
           }
           if (item >= 100000 && item < 1000000) {
            return getSixDigitNumber(item)
           }
           if (item >= 1000000 && item < 10000000) {
            return getSevenDigitNumber(item)
           }
           if (item >= 10000000) {
            return 'more than 7 digit numbers not supported yet'
           }
       })
       if (output[0] === undefined) {
        setOutputValue('')
       } else {
        setOutputValue(output[0])
       }

    }        
}, [inputValue])

return {inputValue, outputValue, handleInputChange }
}