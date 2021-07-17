import React, { useState } from 'react';
import * as Styled from '../../../components';
import * as utils from '../../../utils';
import * as icons from '../../../images';
import { SM, __headers } from './utils';
import { UploadData, useAuthDispatch, useAuthState } from '../../../context';

export const Customize = (props) => {
  const { tst } = useAuthState();
  const dispatch = useAuthDispatch();
  const [view, setView] = useState(0);
  const isRecog = localStorage.getItem('_u_access')
    ? `${JSON.parse(localStorage.getItem('_u_access')).sffd_yh}`
    : false;
  const handleNav = (val) => {
    utils.clearSuccessMessage(dispatch);
    utils.clearContextErrors(dispatch);
    setView(val);
  };
  return (
    <Styled.Base>
      <div>
        <Styled.Components>
          <Styled.SetUpBtns onClick={(e) => handleNav(0)}>
            Setup Profile
          </Styled.SetUpBtns>
          {isRecog || tst ? (
            <div>
              <Styled.SetUpBtns onClick={(e) => handleNav(1)}>
                Social Handles
              </Styled.SetUpBtns>
              <Styled.SetUpBtns onClick={(e) => handleNav(2)}>
                Bio Info
              </Styled.SetUpBtns>
              <Styled.SetUpBtns onClick={(e) => handleNav(3)}>
                About Info
              </Styled.SetUpBtns>
              <Styled.SetUpBtns onClick={(e) => handleNav(4)}>
                Reset Password
              </Styled.SetUpBtns>
              <Styled.SetUpBtns onClick={(e) => handleNav(5)}>
                Contacts
              </Styled.SetUpBtns>
            </div>
          ) : null}
        </Styled.Components>
      </div>

      <ViewPort view={view} />
    </Styled.Base>
  );
};
const ViewPort = (props) => {
  switch (props.view) {
    case 0:
      return <Updater hd={__headers.avator} bd={ProfileUploader} />;
    case 1:
      return <Updater hd={__headers.smedia} bd={SM} />;
    case 2:
      return <Updater hd={__headers.bio} bd={InfoUpdator} />;
    case 3:
      return <Updater hd={__headers.about} bd={AboutUpdator} />;
    case 4:
      return <Updater hd={__headers.passcode} bd={PassReset} />;
    case 5:
      return <Updater hd={__headers.contacts} bd={ContactsUpdator} />;
    default:
      return;
  }
};
const Updater = (props) => {
  return (
    <Styled.Updater>
      <Styled.HeadDesc>{props.hd}</Styled.HeadDesc>
      <props.bd />
    </Styled.Updater>
  );
};
const PassReset = () => {
  return (
    <Styled.CustomForm>
      <Styled.FieldDesc>{__headers.passText}</Styled.FieldDesc>
      <Styled.SmediaFields>
        <Styled.SMIconF>
          <icons.key fill={'#1280a5'} size={22} />
        </Styled.SMIconF>
        <Styled.SMInputs type='password' placeholder='old Password' />
      </Styled.SmediaFields>
      <Styled.CustomLogin type='button'>Submit</Styled.CustomLogin>
      <utils.ViewErrorMessage />
    </Styled.CustomForm>
  );
};
const ContactsUpdator = () => {
  const dispatch = useAuthDispatch();
  const { userData } = useAuthState();
  const { contacts } = userData;
  let tel = contacts.tel === undefined ? '' : contacts.tel;
  const payload = { tel: tel };
  const [data, setData] = useState(payload);
  async function handleRequestCode() {
    //Reject if formatted telephone Length not equal to Required len

    if (data.tel.length !== 11) {
      dispatch({
        type: 'APIACCESS_ERROR',
        error: 'Invalid Phone number for country code 254',
      });
      return;
    }
    //Clear conxext Error
    const res = await UploadData(dispatch, data, '/update/contacts');
    if (res) {
      utils.successResponse(res.message, dispatch);
      utils.clearContextErrors(dispatch);
    }
  }
  const TrackTelInput = (e) => {
    const formattedPhoneNumber = utils.formatPhoneNumber(e.target.value);
    setData({ ...data, tel: formattedPhoneNumber });
  };

  return (
    <Styled.CustomForm>
      <Styled.FieldDesc></Styled.FieldDesc>
      <Styled.SmediaFields>
        <div>
          <Styled.Code254>+254</Styled.Code254>
        </div>
        <Styled.SMInputs
          type='tel'
          placeholder='Phone number'
          value={data.tel}
          onChange={(e) => {
            TrackTelInput(e);
          }}
        />
      </Styled.SmediaFields>

      <Styled.CustomLogin type='button' onClick={(e) => handleRequestCode()}>
        Submit
      </Styled.CustomLogin>
      <utils.ViewErrorMessage />
      <utils.ShowSuccess />
    </Styled.CustomForm>
  );
};
const ProfileUploader = () => {
  const dispatch = useAuthDispatch();
  const { userData } = useAuthState();
  let { fullname } = userData;
  fullname = fullname ? fullname : '';
  async function handleClick() {
    let res = await UploadData(dispatch, data, '/update/profile');
    if (res) {
      utils.clearContextErrors(dispatch);
      utils.successResponse(res.message, dispatch);
      dispatch({ type: 'TEST', dt: true });
      await UploadData(dispatch, { p_id: 0 }, '/ref/pid');
    }
  }
  const payload = { fullname: fullname };
  const [data, setData] = useState(payload);
  return (
    <Styled.CustomForm>
      <Styled.FieldDesc>Customize Your Profile</Styled.FieldDesc>
      <Styled.SmediaFields>
        <Styled.Avator>
          <icons.User fill={'#1280a5'} size={150} />
          <Styled.Editor>Edit</Styled.Editor>
        </Styled.Avator>
      </Styled.SmediaFields>
      <Styled.SmediaFields>
        <Styled.SMIconF>
          <icons.User fill={'#1280a5'} size={22} />
        </Styled.SMIconF>
        <Styled.SMInputs
          type='name'
          placeholder='full name'
          value={data.fullname}
          onChange={(e) => setData({ ...data, fullname: e.target.value })}
        />
      </Styled.SmediaFields>
      {/*<Styled.SmediaFields>
        Resume
        <input type='file' />
      </Styled.SmediaFields>*/}
      <Styled.CustomLogin type='button' onClick={(e) => handleClick(e)}>
        Submit
      </Styled.CustomLogin>
      <utils.ViewErrorMessage />
      <utils.ShowSuccess />
    </Styled.CustomForm>
  );
};

const InfoUpdator = () => {
  const { userData } = useAuthState();
  let { Bio } = userData;
  Bio = Bio ? Bio : '';
  return <DescForm desc={__headers.bioText} path={'info'} value={Bio} />;
};

const AboutUpdator = () => {
  const { userData } = useAuthState();
  let { About } = userData;
  About = About ? About : '';
  return <DescForm desc={__headers.aboutText} path={'about'} value={About} />;
};

const DescForm = (props) => {
  const dispatch = useAuthDispatch();
  const [data, setData] = useState(props.value);
  async function handleClick(e) {
    const pathname = `/update/info`;
    const payload = props.path === 'info' ? { Bio: data } : { About: data };
    let res = await UploadData(dispatch, payload, pathname);
    if (res) {
      utils.clearContextErrors(dispatch);
      utils.successResponse(res.message, dispatch);
    }
  }
  return (
    <Styled.CustomForm>
      <Styled.FieldDesc>{props.desc}</Styled.FieldDesc>
      <Styled.InpField>
        <textarea
          rows={5}
          cols={50}
          style={{ width: '60%' }}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </Styled.InpField>
      <Styled.CustomLogin type='button' onClick={(e) => handleClick(e)}>
        Submit
      </Styled.CustomLogin>
      <utils.ViewErrorMessage />
      <utils.ShowSuccess />
    </Styled.CustomForm>
  );
};
