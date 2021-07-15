import React, { useState } from 'react';
import * as Styled from '../../components';
import * as icons from '../../images';
import * as utils from '../../utils';
import { useAuthDispatch, useAuthState, UploadData } from '../../context';
import { Structure } from '../framework/public';
import { Entry } from '../entry';

const Main = (props) => {
  return <Structure rendered={Login} history={props.history} />;
};

export const LogPage = (props) => (
  <Entry component={Main} history={props.history} />
);

export const Login = (props) => {
  const dispatch = useAuthDispatch();

  const { loading } = useAuthState();

  async function PostLogin(e) {
    e.preventDefault();
    let pathname = '/auth/sign-in/';

    let validation_info = utils.AssertAndValidateLogin(payload);

    if (validation_info === 'valid') {
      let response = await UploadData(dispatch, payload, pathname);

      if (response) {
        utils.clearContextErrors(dispatch);
        props.history.push('/customize');
      }
    } else {
      dispatch({ type: 'APIACCESS_ERROR', error: validation_info });
    }
  }

  const [payload, setPayload] = useState({ email: '', password: '' });

  return (
    <Styled.DescCard>
      <Styled.Form>
        <Styled.InpField>
          <Styled.Input
            type='email'
            name='email'
            placeholder='email'
            onChange={(e) => {
              setPayload({ ...payload, email: e.target.value });
            }}
          />
          <Styled.IconF>
            <icons.envelop fill={'#1280a5'} size={20} />
          </Styled.IconF>
        </Styled.InpField>
        <Styled.InpField>
          <Styled.Input
            type='password'
            name='password'
            placeholder='password'
            onChange={(e) => {
              setPayload({ ...payload, password: e.target.value });
            }}
          />
          <Styled.IconF>
            <icons.key fill={'#1280a5'} size={20} />
          </Styled.IconF>
        </Styled.InpField>
        <Styled.InpField>
          <Styled.Login type='button' onClick={(e) => PostLogin(e)}>
            {loading ? 'Sign-in...' : 'Sign-in.'}
          </Styled.Login>
        </Styled.InpField>
        <utils.ViewErrorMessage />
      </Styled.Form>
    </Styled.DescCard>
  );
};
