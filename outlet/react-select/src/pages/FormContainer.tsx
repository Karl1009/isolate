import React from 'react'
import a from 'react-select'
import Select from 'react-select/dist/declarations/src/Select'
import styled from 'styled-components'
// import PropTypes from 'prop-types'; 
const FormContainerStyle = styled.div({
  marginTop: 20,
  display: 'flex',
  justifyContent: 'center'
})

const FormStyle = styled.div({
    width: "70%",
    height: "100vh",
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: 20,
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"
})

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

 function Input({label} : {label: string}) {
  return (
    <div>
      <LabelStyle>{label}</LabelStyle>
      <InputStyle></InputStyle>
    </div>
  )
}

// Input.propTypes = {
//   label: PropTypes.string
// }


function FormContainer() {
  return (
    <FormContainerStyle>
        <FormStyle>
          <Input label="Name"/>
          <Input label="Age"/>
          <Input label="Address"/>
          <Select/>
        </FormStyle>
    </FormContainerStyle>
  )
}

export default FormContainer