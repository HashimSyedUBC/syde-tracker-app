import React from 'react';
import * as Styled from "../styles/settingStyles"
import { Button } from '../src/components/Button';
import { Footer } from '../src/components/footerNavBar';
import { useAccountDetails } from '../src/hooks/useAccountDetail';

export default function settings() {
    const hook = useAccountDetails();
    return (
        <Styled.SettingsPage>
            <Styled.Header>
                <Styled.WelcomeNote>
                    Welcome Hashim!
                </Styled.WelcomeNote>
                <Button theme='TextBoxHome' height="40px" width="fit-content" buttonText="SIGN OUT" buttonIcon="" onClick={() => console.log('clicked')} />
            </Styled.Header>
            <Styled.AccountDetailsText> Account Details</Styled.AccountDetailsText>
            <Styled.InputSection>
                <Styled.FeildContainer>
                    <Styled.InputLabel> First Name </Styled.InputLabel>
                    <Styled.EditableInput type='text' value={hook.firstName} onChange={(e) => hook.setFirstName(e.target.value)} />
                </Styled.FeildContainer>
                <Styled.FeildContainer>
                    <Styled.InputLabel> Last Name </Styled.InputLabel>
                    <Styled.EditableInput type='text' value={hook.lastName} onChange={(e) => hook.setLastName(e.target.value)} />
                </Styled.FeildContainer>
            </Styled.InputSection>

            <Styled.InputSection> 
                <Styled.FeildContainer>
                    <Styled.InputLabel> Email </Styled.InputLabel>
                    <Styled.Email>
                        {hook.emailAddress}
                    </Styled.Email>
                </Styled.FeildContainer>
            </Styled.InputSection>

            <Styled.InputSection>
                <Styled.FeildContainer>
                    <Styled.InputLabel> Province </Styled.InputLabel>
                    <Styled.EditableInput type='text' value={hook.province} onChange={(e) => hook.setProvince(e.target.value)} />
                </Styled.FeildContainer>
                <Styled.FeildContainer>
                    <Styled.InputLabel> Country </Styled.InputLabel>
                    <Styled.EditableInput type='text' value={hook.country} onChange={(e) => hook.setCountry(e.target.value)} />
                </Styled.FeildContainer>
            </Styled.InputSection>
            <Button height="40px" width="fit-content" buttonText="SAVE" buttonIcon="" onClick={(e) => hook.handle()} />
            <Styled.AccountDetailsText>
                Deactivate Account
            </Styled.AccountDetailsText>
            <Styled.DeactivateAccountSection>
            To deactivate your account and delete all your app related data click the button below. 
            <br></br>Reactivating your account would require you to sign up again!
            </Styled.DeactivateAccountSection>
            <Button height="40px" width="fit-content" buttonText="Deactivate" buttonIcon="fa-solid fa-trash-can" onClick={(e) => hook.deactivate()} />
            <Footer />
        </Styled.SettingsPage>
    )
}
