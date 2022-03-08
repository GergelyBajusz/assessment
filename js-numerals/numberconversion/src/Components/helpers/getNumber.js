export const getOneDigitNumber = (number) => {
    switch (number) {
      case 1: return 'one'
      case 2: return 'two'
      case 3: return 'three'
      case 4: return 'four'
      case 5: return 'five'
      case 6: return 'six'
      case 7: return 'seven'
      case 8: return 'eight'
      case 9: return 'nine'
      case 10: return 'ten'
      case 11: return 'eleven'
      case 12: return 'twelve'
      case 13: return 'thirteen'
      case 15: return 'fifteen'
      case 18: return 'eighteen'
      default: return ''
    }
  }

  export const getTwoDigitNumber = (number) => {
       if (number < 13 || number === 15 || number === 18) {
        return getOneDigitNumber(number)
       }
       if (number >= 13 && number < 20 && (number !== 15 || number !== 18)) {
        return `${getOneDigitNumber(number-10)}teen`
       }
       if (number >= 20 && number < 30) {
           if (number === 20) {
               return 'twenty'
           }
        return `twenty-${getOneDigitNumber(number-20)}`
       }
       if (number >= 30 && number < 40) {
        if (number === 30) {
            return 'thirty'
        }
        return `thirty-${getOneDigitNumber(number-30)}`
       }
       if (number >= 40 && number < 50) {
        if (number === 40) {
            return 'forty'
        }
        return `forty-${getOneDigitNumber(number-40)}`
       }
       if (number >= 50 && number < 60) {
        if (number === 50) {
            return 'fifty'
        }
        return `fifty-${getOneDigitNumber(number-50)}`
       }
       if (number >= 60 && number < 70) {
        if (number === 60) {
            return 'sixty'
        }
        return `sixty-${getOneDigitNumber(number-60)}`
       }
       if (number >= 70 && number < 80) {
        if (number === 70) {
            return 'seventy'
        }
        return `seventy-${getOneDigitNumber(number-70)}`
       }
       if (number >= 80 && number < 90) {
        if (number === 80) {
            return 'eighty'
        }
        return `eighty-${getOneDigitNumber(number-80)}`
       }
       if (number >= 90 && number < 100) {
        if (number === 90) {
            return 'ninety'
        }
        return `ninety-${getOneDigitNumber(number-90)}`
       }
  }

  export const getThreeDigitNumber = (number) => {
      if(number.toString().length < 3) {
        return `and ${getTwoDigitNumber(number)}`
      }
      const hundred = number.toString().charAt(0);
      if (number % 100 === 0) {
        return `${getOneDigitNumber(parseInt(hundred))} hundred`
      } else {
        return `${getOneDigitNumber(parseInt(hundred))} hundred and ${getTwoDigitNumber(number - parseInt(hundred *100))}`
      }     
  }

  export const getFourDigitNumber = (number) => {
    const thousand = number.toString().charAt(0);
    if (number % 1000 === 0) {
        return `${getOneDigitNumber(parseInt(thousand))} thousand`        
    } else {
        return `${getOneDigitNumber(parseInt(thousand))} thousand ${getThreeDigitNumber(number - parseInt(thousand *1000))}`
    }
}