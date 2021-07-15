import React from 'react';
import { DescCard } from '../../components';
import { useAuthState } from '../../context';
import { Structure } from '../framework/public';
import { Entry } from '../entry';

export const About = (props) => {
  return <Structure rendered={Temp} history={props.history} />;
};

export const AboutPage = (props) => (
  <Entry component={About} history={props.history} />
);

const Temp = () => {
  const { userData } = useAuthState();
  return (
    <DescCard>
      {userData.About
        ? userData.About
        : `Exercitation et qui labore Lorem culpa officia ea labore Lorem dolor nulla
      sit ullamco consequat.Enim nisi ipsum ut do sint dolore consequat non
      reprehenderit cillum duis.Ex mollit cupidatat ad voluptate anim amet
      voluptate reprehenderit in velit minim.`}
    </DescCard>
  );
};
