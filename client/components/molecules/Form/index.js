import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex } from './../../../styled_system/flexbox'
import { colors, text } from './../../../styled_system'
import Input from './../../atoms/Input'
import Button from './../../atoms/Button'
import Text from './../../atoms/Text'

const FormContainer = styled(Flex)`
    ${props => props.styles}
`

const FormGroup = styled(Flex)`
    ${props => props.styles}
`

const Label = styled.label`
    ${props => props.styles}
`
const inputStyles = css`
    width: 200px;
    height: 40px;
    padding: 0.5em 1em;
    margin: 1em 0;
    border: none;
    border-radius: 20px;
    background: ${colors.PrimaryLight};
    font-size: ${text.textSm()};
    outline: none;

    &:focus, :active {
        outline: none;
    }
`

const labelStyles = css`
    align-self: center;
    margin: 0 1em 0 0;

    @media (max-width: 420px) {
        display: none;
    }
`

const Form = ({ form, handleOnSubmit }) => (
    <FormContainer {...form.formContainer}>
        <Text {...form.formTitle}>{form.formTitle.text}</Text>
        <FormGroup {...form.formGroup}>
            <Label {...form.formLabels.username}>Username</Label>
            <Input {...form.formInputs.username} />
        </FormGroup>
        <FormGroup {...form.formGroup}>
            <Label {...form.formLabels.email}>Email</Label>
            <Input {...form.formInputs.email} />
        </FormGroup>
        <Button {...form.formButton} 
        clicked={handleOnSubmit}>{form.formButton.text}</Button>
    </FormContainer>
)

Form.propTypes = {
    form: PropTypes.object,
    handleOnSubmit: PropTypes.func
}

Form.defaultProps = {
    form: {
        formContainer: {
            as: 'form',
            styles: css`
                width: 90%;
                height: 400px;
                max-width: 500px;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                margin: 1em auto;
                background: ${colors.AccentLight}
            `
        },
        formTitle: {
            content: {
                as: 'h1',
                styles: css`
                    font-size: ${text.fluid(28, 32, 320, 1199)};
                    font-weight: 700;
                    color: ${colors.LightGray};
                    line-height: ${text.headingLineHeight};
                    text-align: center;

                    @media (min-width: 1199px) {
                        font-size: 32px;
                    }
                `
            },
            text: 'Form'
        },
        formGroup: {
            styles: css`
                width: 300px;
                margin: 1em 0;
                justify-content: space-between;
                align-items: center;

                @media (max-width: 420px) {
                    justify-content: center;
                }
            `
        },
        formLabels: {
            username: {
                styles: labelStyles,
                htmlFor: 'username'
            },
            email: {
                styles: labelStyles,
                htmlFor: 'email'
            }
        },
        formInputs: {
            username: {
                input: {
                    styles: inputStyles,
                    type: 'text',
                    name: 'username',
                    placeholder: 'Username...',
                    required: true
                }
            },
            email: {
                input: {
                    styles: inputStyles,
                    type: 'email',
                    name: 'email',
                    placeholder: 'Email...',
                    required: true
                }
            }
        },
        formButton: {
            button: {
                styles: css`
                    width: 130px;
                    height: 40px;
                    position: relative;
                    font-weight: 700;
                    font-size: ${text.fluid(14, 18, 320, 1199)};
                    text-align: center;
                    color: ${colors.LightGray};
                    background: ${colors.Gray3};
                    border: none;
                    box-shadow: 2px 2px 5px 0px ${colors.Gray1};
                    margin: 1em 0 0 0;
                    padding: 0.5em;
                    cursor: pointer;
        
                    &:active, :focus {
                        outline: none;
                    }
        
                    @media (min-width: 1199px) {
                        font-size: 18px;
                    }
                `
            },
            text: 'Submit'
        }
    },
    handleOnSubmit: (e) => e.preventDefault()
}

export default Form