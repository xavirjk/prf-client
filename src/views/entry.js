import React, { useState } from 'react';
import * as Styled from '../components';
import * as icons from '../images';
import { CollapsableMenu } from '../utils/public/menu';
export const Entry = (props) => {
  //Temp
  const [toggled, setToggle] = useState(1);
  const [inView, setView] = useState(0);

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
