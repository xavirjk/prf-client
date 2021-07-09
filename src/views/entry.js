import React, { useState } from 'react';
import * as Styled from '../components';
import * as icons from '../images';
import { CollapsableMenu } from '../utils/public/menu';
export const Entry = (props) => {
  //Temp
  console.log(props);
  const [toggled, setToggle] = useState(0);
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
            <Styled.HeaderIc>
              <icons.User size={30} />
            </Styled.HeaderIc>
          ) : (
            <Styled.BackIc>
              <icons.BackArrow size={30} />
            </Styled.BackIc>
          )}
        </div>
        <Styled.HeaderCt />
      </Styled.Header>
      <Styled.BodyCt>
        {toggled ? <CollapsableMenu setView={setView} /> : null}
        <Styled.MainCont toggled={toggled}>
          <props.component inView={inView} history={props.history} />
        </Styled.MainCont>
      </Styled.BodyCt>
    </Styled.Main>
  );
};
