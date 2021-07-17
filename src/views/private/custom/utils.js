import * as Styled from '../../../components';
import * as icons from '../../../images';
import * as utils from '../../../utils';
import { UploadData, useAuthDispatch, useAuthState } from '../../../context';
import { useState } from 'react';

export const SM = () => {
  const dispatch = useAuthDispatch();
  //Handle data Upload
  const handleClick = async (e) => {
    function populate(item) {
      switch (item.name) {
        case configs[0].name:
          payload.Instagram = item.value;
          break;
        case configs[1].name:
          payload.Facebook = item.value;
          break;
        case configs[2].name:
          payload.Twitter = item.value;
          break;
        case configs[3].name:
          payload.TikTok = item.value;
          break;
        case configs[4].name:
          payload.SnapChat = item.value;
          break;
        default:
          break;
      }
    }
    document
      .getElementById('fr1')
      .querySelectorAll('input')
      .forEach((item) => populate(item));
    const pathname = '/update/links';
    let res = await UploadData(dispatch, payload, pathname);
    if (res) {
      utils.successResponse(res.message, dispatch);
    }
  };

  const payload = {
    Instagram: '',
    Facebook: '',
    Twitter: '',
    TikTok: '',
    SnapChat: '',
  };
  const { userData } = useAuthState();
  let { links } = userData;
  links = links ? links : '';
  const configs = [
    { name: 'Instagram', ICON: ICON(icons.IG), value: links.Instagram },
    { name: 'Facebook', ICON: ICON(icons.Fb), value: links.Facebook },
    { name: 'Twitter', ICON: ICON(icons.Twitter), value: links.Twitter },
    { name: 'Tiktok', ICON: ICON(icons.TikTok), value: links.TikTok },
    { name: 'SnapChat', ICON: ICON(icons.SnapChat), value: links.SnapChat },
  ];
  return (
    <Styled.CustomForm id='fr1'>
      <Styled.FieldDesc>{__headers.smediaTxt}</Styled.FieldDesc>
      {configs.map((input) => (
        <div key={input.name}>
          <Handles name={input.name} Ic={input.ICON} value={input.value} />
        </div>
      ))}
      <Styled.SmediaFields>
        <Styled.CustomLogin type='button' onClick={(e) => handleClick(e)}>
          Add Handles
        </Styled.CustomLogin>
      </Styled.SmediaFields>
      <utils.ViewErrorMessage />
      <utils.ShowSuccess />
    </Styled.CustomForm>
  );
};

const Handles = (props) => {
  let link = '';
  if (props.value !== undefined) {
    link = props.value;
  }
  const [value, setVal] = useState(link);
  return (
    <div>
      <Styled.SmediaFields>
        <Styled.SMIconF>{props.Ic}</Styled.SMIconF>
        <Styled.SMInputs
          type='text'
          placeHolder={props.name}
          value={value}
          name={props.name}
          onChange={(e) => setVal(e.target.value)}
        />
      </Styled.SmediaFields>
    </div>
  );
};

const ICON = (RIcon) => <RIcon fill={'#1280a5'} size={22} />;

export const __headers = {
  avator: 'Create Your Profile',
  smedia: 'Provide your social media Accounts',
  bio: 'Update Your Bio',
  about: 'Update your About',
  bioText: 'Give a catchy but Short description ..Say out.',
  aboutText:
    'Tell people what you do... In a short description give your background information You' +
    ' may also include your employment status.',
  smediaTxt:
    'Providing your Handles will expand your network around the social media community..' +
    'This also adds you more Followers',
  contacts: 'Create a communication channel',
  passcode: 'Change Your Password',
  passText:
    'A strong password is a combination of Letters, Numbers, symbols and special Characters of the alphabet ' +
    'A Minimum of 6 characters and A maximum of 24 characters is required',
};
