import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const InputStyle = styled.input({
    height: "30px",
    width: '50%',
    fontSize: 14,
    padding: "0 20px 0 20px",
    borderRadius: 20,
    border: "1px solid #e6e6e6",
    outline: 'none'
})

const LabelStyle = styled.label({
  marginRight: 10,
  fontSize: 13

})


function Input({label}) {
    return (
      <div>
        <LabelStyle>{label}</LabelStyle>
        <InputStyle></InputStyle>
      </div>
    )
  }
  
  Input.propTypes = {
    label: PropTypes.string
  }
  

export default Input