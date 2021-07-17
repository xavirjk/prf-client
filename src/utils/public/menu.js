import React, { useEffect } from 'react';
import * as Styled from '../../components';
import { fetchData, useAuthDispatch, useAuthState } from '../../context';
import * as icons from '../../images';
export const CollapsableMenu = (props) => {
  const dispatch = useAuthDispatch();
  const { userData } = useAuthState();
  useEffect(() => {
    async function getDetails() {
      const res = await fetchData(dispatch, '/user/client');
      if (res) {
        dispatch({ type: 'USER_PRESENT', user: res.data });
      }
    }
    getDetails();
  }, [dispatch]);
  const Links = sanitizedLinks(userData.links);
  return (
    <Styled.Menu>
      <div>
        <div style={{ padding: '0rem 2rem' }}>
          <Styled.HeaderIc>
            <icons.User size={60} fill={'#1280a5'} />
          </Styled.HeaderIc>
        </div>
        <div style={{ textAlign: 'center' }}> {userData.fullname}</div>
      </div>
      <div>
        {Links !== undefined ? (
          <Styled.SMIconsCont>
            <a
              href={`https://www.instagram.com/${Links.Instagram}`}
              target='_blank'
              rel='noreferrer'
            >
              <icons.IG fill={'#1280a5'} size={20} />
            </a>
            <a href={`https://web.facebook.com/${Links.Facebook}`}>
              <icons.Fb fill={'#1280a5'} size={20} />
            </a>
            <a href={`https://twitter.com/${Links.Twitter}`}>
              <icons.Twitter fill={'#1280a5'} size={20} />
            </a>
            <a href={`http://www.tiktoks.com/${Links.TikTok}`}>
              <icons.TikTok fill={'#1280a5'} size={20} />
            </a>
            <a href={`http://www.snapchat.com/${Links.SnapChat}`}>
              <icons.SnapChat fill={'#1280a5'} size={20} />
            </a>
          </Styled.SMIconsCont>
        ) : null}
      </div>
      <Styled.Nav>
        <Styled.NavEl onClick={(e) => props.history.push('/home')}>
          <Styled.Icon>
            <icons.Igloo size={20} />
          </Styled.Icon>
          Home
        </Styled.NavEl>
        <Styled.NavEl onClick={(e) => props.history.push('/about')}>
          <Styled.Icon>
            <icons.User size={20} fill={'white'} />
          </Styled.Icon>
          About
        </Styled.NavEl>
        <Styled.NavEl onClick={(e) => props.history.push('/customize')}>
          <Styled.Icon>
            <icons.Custom size={20} fill={'white'} />
          </Styled.Icon>
          Customize
        </Styled.NavEl>
        <Styled.NavEl>
          <Styled.Icon>
            <icons.DoorOpen size={20} />
          </Styled.Icon>
          Portfolio
        </Styled.NavEl>
      </Styled.Nav>
    </Styled.Menu>
  );
};

const sanitizedLinks = (links) => {
  if (links === undefined || links === null) {
    return undefined;
  } else if (links.Instagram === null || links.Instagram === undefined) {
    return undefined;
  }
  return links;
};
