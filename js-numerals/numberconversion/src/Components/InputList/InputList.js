import React, {useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import InputField from '../InputField/InputField'
import {
  getOneDigitNumber,
  getTwoDigitNumber,
  getThreeDigitNumber,
  getFourDigitNumber,
  getFiveDigitNumber,
  getSixDigitNumber,
  getSevenDigitNumber
  } from '../helpers/getNumber'
import { PrimaryColor, PrimaryColorLight } from '../../Constants/colors'

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
    

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '60px',
      '@media (max-width: 690px)': {
        flexDirection: 'column',
        marginTop: '12px',
      },
    }}>
      <Typography sx={{
        fontSize: '2.4rem',
        fontWeight: 600,
        textAlign: 'center',
        color: PrimaryColorLight,
        textShadow: `2px 4px 2px ${PrimaryColor}`,
        '@media (max-width: 690px)': {
          fontSize: '1.4rem',
          textShadow: `1px 2px 2px ${PrimaryColor}`,
        },
      
    }}>
        {`Convert a number into it's equivalent alphabet form!`}
      </Typography>
       <Box
        sx={{
          display: 'flex',
          gap: '10%',
          paddingRight: '10%',
          marginTop: '60px',
          '@media (max-width: 690px)': {
            flexDirection: 'column',
            marginTop: '12px',
            paddingRight: 0,
          },
        }}
      >
          <InputField 
          id='numberInputField'
          heading={'Type your number into the field:'}
          type={'number'}
          value={inputValue}
          label={'number'}
          handleChange={(e) => handleInputChange(e)}
          />
          <InputField
          id='numberOutputField'
          heading={'Your alphabet number is:'}
          type={'text'}
          value={outputValue}
          label={'alphabet'}
          disabled
          />
        </Box>
    </Box>
     
  );
}

export default InputList