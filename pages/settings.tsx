import React from 'react';
import * as Styled from "../styles/settingStyles"
import { Button } from '../src/components/Button';
import { Footer } from '../src/components/footerNavBar';

export default function settings() {
    return (
        <Styled.SettingsPage>
            <Styled.Header>
                <Styled.WelcomeNote>
                    Welcome Hashim!
                </Styled.WelcomeNote>
                <Button height="40px" width="fit-content" buttonText="SIGN OUT" buttonIcon="" onClick={() => console.log('clicked')} />
            </Styled.Header>
            <Styled.AccountDetails>
                <Styled.AccountDetailsText>
                    Account Details
                </Styled.AccountDetailsText>
                <Styled.NameSection>
                    <Styled.EditableLabel> First Name: </Styled.EditableLabel>
                    <Styled.EditableInput/>
                    <Styled.EditableLabel> Last Name: </Styled.EditableLabel>
                    <Styled.EditableInput/>
                </Styled.NameSection>
                <Styled.NonEditableLabel> Email Address</Styled.NonEditableLabel>
                <Styled.NonEditableInput/>
                <Styled.AddressSection>
                    <Styled.EditableLabel> Country: </Styled.EditableLabel>
                    <Styled.EditableInput/>
                    <Styled.EditableLabel> Province: </Styled.EditableLabel>
                    <Styled.EditableInput/>
                </Styled.AddressSection>
                <Button height="40px" width="1rem" buttonText="SIGN OUT" buttonIcon="" onClick={() => console.log('clicked')} />
            </Styled.AccountDetails>
           <Footer/>
        </Styled.SettingsPage>
    )
}