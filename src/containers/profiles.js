import React, { useState } from 'react';
import { Header,Profiles } from '../components';
import logo from '../logo.svg';
import * as ROUTES from "../constants/routes";


export function SelectProfileContainer({ user, setProfile }) {
 

    return (
        <>
          <Header bg={false}>
              <Header.Frame>
                  <Header.Logo to={ROUTES.HOME} src={logo} alt="넷플릭스" />
              </Header.Frame>
            </Header>

              <Profiles>
                  <Profiles.Title>Netflix를 시청할 프로필을 선택해주세요</Profiles.Title>
                  <Profiles.List>
                      <Profiles.User
                        data-testid="user-profile"
                        onClick={() => setProfile({ 
                            displayName: user.displayName, 
                            photoURL: user.photoURL
                        })}
                    >

                           <Profiles.Picture src={user.photoURL} />
                           <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                    
                  </Profiles.List>
              </Profiles>
        </>
    )
}
