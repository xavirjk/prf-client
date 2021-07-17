import React from 'react';
import { Entry } from '../../entry';
import * as Styled from '../../../components';
import { useAuthState } from '../../../context';

export const contactCard = (props) => (
  <Entry component={Contact} history={props.history} />
);
export const Contact = () => {
  const { userData } = useAuthState();
  const { contacts } = userData;
  let tel = '';
  if (contacts) {
    tel = contacts.tel === undefined ? '' : contacts.tel;
  }

  return (
    <Styled.Base>
      <div>
        {tel ? (
          <div>
            <Styled.TelHead>Mobile Contacts</Styled.TelHead>

            <strong>
              <Styled.TelA href={`tel:+${tel}`}>
                {' '}
                Give a call +254 {tel}
              </Styled.TelA>
            </strong>
          </div>
        ) : (
          'No contacts Updated'
        )}
      </div>
    </Styled.Base>
  );
};
