import { Entry } from '../entry';
import React from 'react';
import { Slider, ImgPane } from '../../utils/public/components';
import { Main, About, Login } from '../public';

import * as Styled from '../../components';

const Structure = (props) => {
  let rendered;
  switch (props.inView) {
    case 0:
      rendered = <Main />;
      break;
    case 1:
      rendered = <About />;
      break;
    case 2:
      rendered = <Login history={props.history} />;
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <Styled.Cont>
        <Styled.Desc>
          <div style={{ padding: '0 2rem' }}>
            <Styled.CardHead>Home{'>>'}magdaline. Major</Styled.CardHead>
            {rendered}
            <Styled.ButtonGroup>
              <Styled.ClassicBtn1>View Resume</Styled.ClassicBtn1>
              <Styled.ClassicBtn2>Contacts</Styled.ClassicBtn2>
            </Styled.ButtonGroup>
          </div>
        </Styled.Desc>
      </Styled.Cont>
      <Styled.Cont>
        <Slider num={2} component={ImgPane} />
      </Styled.Cont>
    </React.Fragment>
  );
};

export const Public = (props) => (
  <Entry component={Structure} history={props.history} />
);
