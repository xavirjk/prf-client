import React from 'react';
import { Entry } from '../entry';
import { DescCard } from '../../components';
import { useAuthState } from '../../context';
import { Structure } from '../framework/public';

const Main = (props) => {
  return <Structure rendered={Temp} history={props.history} />;
};

export const HomePage = (props) => (
  <Entry component={Main} history={props.history} />
);

const Temp = () => {
  const { userData } = useAuthState();
  return (
    <DescCard>
      {userData.Bio
        ? userData.Bio
        : `Sunt ea sint sint qui pariSit incididunt in sit est sunt officia voluptate
      mollit veniam irure officia Lorem. Nostrud commodo mollit laborum sunt
      deserunt officia officia minim. Eiusmod esse labore.`}
    </DescCard>
  );
};
