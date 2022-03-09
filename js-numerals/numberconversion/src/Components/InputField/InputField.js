import React from 'react'
import PropTypes from "prop-types";
import { TextField, Typography, Card, CardContent } from '@mui/material'
import { SecondaryColorLight, PrimaryWhite } from '../../Constants/colors'

import './styles.scss'


function InputField({heading, type, value, label, handleChange, disabled, id}) {
  return (
          <Card
           className='InputField'
           sx={{
            minWidth: 400,
            minHeight: 300,
            margin: '4px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: SecondaryColorLight,
            color: PrimaryWhite,
            '@media (max-width: 990px)': {
              minWidth: 300,
              minHeight: 300,
            },
          }}
          >
            {heading &&
            <CardContent>
                <Typography variant="h5" component="div">
                    {heading}
                 </Typography>
            </CardContent>}
            <TextField
              id={id}
              multiline
              type={type}
              label={label}
              variant="outlined"
              value={value}
              onChange={handleChange}
              disabled={disabled}
            />
          </Card>
  );
}

InputField.propTypes = {
    heading: PropTypes.string,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    handleChange: PropTypes.func,
    disabled: PropTypes.bool,
    id: PropTypes.string,
  };
  
  InputField.defaultProps = {
    heading: undefined,
    handleChange: undefined,
  };

export default InputField