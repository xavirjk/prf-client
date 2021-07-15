import React from 'react';
import * as Styled from '../../components';
import { useAuthState } from '../../context';

export const ViewErrorMessage = () => {
  const { errorMessage } = useAuthState();
  return (
    <div>
      {errorMessage ? (
        <Styled.ErrorCard>
          <p className='errorField' role='alert'>
            <strong>{errorMessage}</strong>
          </p>
        </Styled.ErrorCard>
      ) : null}
    </div>
  );
};

export const ShowSuccess = () => {
  const { successMessage } = useAuthState();
  return (
    <Styled.SuccessCard>
      {successMessage ? <strong>{successMessage}</strong> : null}
    </Styled.SuccessCard>
  );
};
