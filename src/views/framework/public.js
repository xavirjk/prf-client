import React, { useEffect } from 'react';
import { Slider, ImgPane } from '../../utils/public/components';

import * as Styled from '../../components';
import { UploadData, useAuthDispatch, useAuthState } from '../../context';
import { c_routes } from '../../utils';

export const Structure = (props) => {
  const dispatch = useAuthDispatch();
  const { userData } = useAuthState();
  const { ROOT_URL } = c_routes;
  useEffect(() => {
    const fetchId = async () => {
      await UploadData(dispatch, { p_id: 0 }, '/ref/pid');
    };
    fetchId();
  }, [dispatch]);

  return (
    <React.Fragment>
      <Styled.Cont>
        <Styled.Desc>
          <div style={{ padding: '0 2rem' }}>
            <Styled.CardHead>
              Home{'>>'}
              {userData.fullname}
            </Styled.CardHead>
            <input type='Number' value='0' hidden readOnly />
            <props.rendered history={props.history} />
            <Styled.ButtonGroup>
              <Styled.ClassicLink1 href={`${ROOT_URL}/${userData.resume}`}>
                View Resume
              </Styled.ClassicLink1>
              <Styled.ClassicBtn2
                onClick={(e) => {
                  props.history.push('/contacts');
                }}
              >
                Contacts
              </Styled.ClassicBtn2>
            </Styled.ButtonGroup>
          </div>
        </Styled.Desc>
      </Styled.Cont>
      <Styled.Cont>
        <Slider num={3} component={ImgPane} />
      </Styled.Cont>
    </React.Fragment>
  );
};
