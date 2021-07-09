import * as Styled from '../../../components';
import * as icons from '../../../images';
import * as utils from '../../../utils';
import { UploadData, useAuthDispatch } from '../../../context';

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
    console.log('res', res);
  };

  const payload = {
    Instagram: '',
    Facebook: '',
    Twitter: '',
    TikTok: '',
    SnapChat: '',
  };
  const configs = [
    { name: 'Instagram', ICON: ICON(icons.IG) },
    { name: 'Facebook', ICON: ICON(icons.Fb) },
    { name: 'Twitter', ICON: ICON(icons.Twitter) },
    { name: 'Tiktok', ICON: ICON(icons.TikTok) },
    { name: 'SnapChat', ICON: ICON(icons.SnapChat) },
  ];
  return (
    <Styled.Form id='fr1'>
      {configs.map((input) => (
        <div key={input.name}>
          <Handles name={input.name} Ic={input.ICON} />
        </div>
      ))}
      <Styled.SmediaFields>
        <Styled.Login type='button' onClick={(e) => handleClick(e)}>
          Add Handles
        </Styled.Login>
      </Styled.SmediaFields>
      <utils.ViewErrorMessage />
    </Styled.Form>
  );
};

const Handles = (props) => {
  return (
    <div>
      <Styled.SmediaFields>
        <Styled.SMIconF>{props.Ic}</Styled.SMIconF>
        <Styled.SMInputs
          type='text'
          placeHolder={props.name}
          name={props.name}
        />
      </Styled.SmediaFields>
    </div>
  );
};

const ICON = (RIcon) => <RIcon fill={'#1280a5'} size={22} />;
