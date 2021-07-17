import React, { useState } from 'react';
import * as Styled from '../components';
import { useAuthDispatch, useAuthState, logout } from '../context';
import * as icons from '../images';
import { CollapsableMenu } from '../utils/public/menu';
export const Entry = (props) => {
  //Temp
  const [toggled, setToggle] = useState(1);
  const [inView, setView] = useState(0);
  const { token } = useAuthState();

  return (
    <Styled.Main>
      <Styled.Header>
        <div
          onClick={(e) => {
            setToggle(!toggled);
          }}
        >
          {!toggled ? (
            <Styled.HeaderBar>
              <icons.Bars size={30} />
            </Styled.HeaderBar>
          ) : (
            <Styled.BackIc>
              <icons.BackArrow size={30} />
            </Styled.BackIc>
          )}
        </div>
        <Styled.HeaderCt />
        {token ? <SignOut history={props.history} /> : null}
      </Styled.Header>
      <Styled.BodyCt>
        {toggled ? (
          <CollapsableMenu setView={setView} history={props.history} />
        ) : null}
        <Styled.MainCont toggled={toggled}>
          <props.component inView={inView} history={props.history} />
        </Styled.MainCont>
      </Styled.BodyCt>
    </Styled.Main>
  );
};

const SignOut = (props) => {
  function logOff() {
    logout(dispatch);
    props.history.push('/home');
  }
  const dispatch = useAuthDispatch();
  return (
    <Styled.LogOut onClick={(e) => logOff()}>
      <Styled.SMIconF>
        <icons.Custom fill={'#1280a5'} size={22} />
      </Styled.SMIconF>
    </Styled.LogOut>
  );
};
