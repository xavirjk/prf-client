import React, { useState } from 'react';
import * as Styled from '../../../components';

export const Customize = (props) => {
  const [view, setView] = useState(0);
  return (
    <Styled.Base>
      <Styled.Components>
        <Styled.SetUpBtns onClick={(e) => setView(0)}>
          Profile photo Setups
        </Styled.SetUpBtns>
        <Styled.SetUpBtns onClick={(e) => setView(1)}>
          Social Media Setups
        </Styled.SetUpBtns>
        <Styled.SetUpBtns onClick={(e) => setView(2)}>
          Setup Bio
        </Styled.SetUpBtns>
        <Styled.SetUpBtns onClick={(e) => setView(3)}>
          Setup About
        </Styled.SetUpBtns>
      </Styled.Components>
      <ViewPort view={view} />
    </Styled.Base>
  );
};
const ViewPort = (props) => {
  switch (props.view) {
    case 0:
      return <Updater hd={'Create Your Profile Picture'} bd={'qq'} />;
    case 1:
      return <div>ww</div>;
    case 2:
      return <div>Bio</div>;
    case 3:
      return <div>About</div>;
    default:
      return;
  }
};

const Updater = (props) => {
  return (
    <Styled.Updater>
      <Styled.HeadDesc>{props.hd}</Styled.HeadDesc>
      {props.bd}
    </Styled.Updater>
  );
};
const Header = (props) => {
  return <Styled.HeadDesc>{props.hd}</Styled.HeadDesc>;
};
const setUpPage = (props) => {
  return (
    <div>
      <div>{props.header}</div>
      <div>{props.desc}</div>
    </div>
  );
};
