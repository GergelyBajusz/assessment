import React, {useState, useEffect} from 'react'
import { Box } from '@mui/material'
import InputField from '../InputField/InputField'
import {
  getOneDigitNumber,
  getTwoDigitNumber,
  getThreeDigitNumber,
  getFourDigitNumber,
  getFiveDigitNumber
  } from '../helpers/getNumber'

function InputList() {
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

           })
           if (output[0] === undefined) {
            setOutputValue('')
           } else {
            setOutputValue(output[0])
           }

        }        
    }, [inputValue])
    

  return (
      <Box
        sx={{
          display: 'flex',
          gap: '10%',
          marginTop: '60px',
          '@media (max-width: 690px)': {
            flexDirection: 'column',
            marginTop: '12px',
          },
        }}
      >
          <InputField 
          heading={'Type your number into the field:'}
          type={'number'}
          value={inputValue}
          label={'number'}
          handleChange={(e) => handleInputChange(e)}
          />
          <InputField 
           heading={'Your alphabet number is:'}
          type={'text'}
          value={outputValue}
          label={'alphabet'}
          disabled
          />
        </Box>
  );
}

export default InputList