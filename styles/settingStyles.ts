import styled from "styled-components"
import { colors, fonts } from "./theme";

export const SettingsPage = styled.div`
    display : flex;
    flex-direction: column;
    padding: 64px;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 2px -2px gray;
`
export const WelcomeNote = styled.header`
    ${fonts.H700}
    font-weight: bold;
    text-shadow: 0px 1px 1px black;
`

export const AccountDetailsText = styled.p`
    ${fonts.H601}
`

export const AccountDetails = styled.form`

`
export const EditableLabel= styled.label`
`
export const EditableInput= styled.input`
`
export const NonEditableLabel = styled.label`
`
export const NonEditableInput = styled.input`

`
export const NameSection = styled.div`

`
export const AddressSection = styled.div`

`
export const DeactivateAccountSection = styled.div`

`