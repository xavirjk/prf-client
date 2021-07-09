import * as Styled from '../../components';
import * as icons from '../../images';
import prf from '../../images/major.jpg';
export const CollapsableMenu = (props) => {
  return (
    <Styled.Menu>
      <div>
        <div style={{ padding: '0rem 2rem' }}>
          <Styled.HeaderIc>
            {/*<img src={prf} alt={'p'} width={'100%'} height={'100%'} />*/}
            <icons.User size={60} fill={'#1280a5'} />
          </Styled.HeaderIc>
        </div>
        <div style={{ textAlign: 'center' }}> magdaline. Major</div>
      </div>
      <div>
        <Styled.SMIconsCont>
          <a
            href='https://www.instagram.com/major_magdaline/'
            target='_blank'
            rel='noreferrer'
          >
            <icons.IG fill={'#1280a5'} size={20} />
          </a>
          <a href='https://web.facebook.com/magdaline.major'>
            <icons.Fb fill={'#1280a5'} size={20} />
          </a>
          <a href='https://twitter.com/magdalinemajor'>
            <icons.Twitter fill={'#1280a5'} size={20} />
          </a>
          <a href='http://web.facebook.com/magdalene.major'>
            <icons.TikTok fill={'#1280a5'} size={20} />
          </a>
          <a href='http://web.facebook.com/magdalene.major'>
            <icons.SnapChat fill={'#1280a5'} size={20} />
          </a>
        </Styled.SMIconsCont>
      </div>
      <Styled.Nav>
        <Styled.NavEl onClick={(e) => props.setView(0)}>
          <Styled.Icon>
            <icons.Igloo size={20} />
          </Styled.Icon>
          Home
        </Styled.NavEl>
        <Styled.NavEl onClick={(e) => props.setView(1)}>
          <Styled.Icon>
            <icons.User size={20} fill={'white'} />
          </Styled.Icon>
          About
        </Styled.NavEl>
        <Styled.NavEl onClick={(e) => props.setView(2)}>
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
