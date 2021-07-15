import React from 'react';
import { Entry } from '../../entry';
import * as Styled from '../../../components';

export const contactCard = (props) => (
  <Entry component={Contact} history={props.history} />
);
export const Contact = () => {
  return <Styled.Base>No Contacts Updated</Styled.Base>;
};
