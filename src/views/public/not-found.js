import { NotFound } from '../../components';

export const notFound = () => {
  return (
    <NotFound>
      Page not found. Please proceed to <a href='/home'>Home</a>
    </NotFound>
  );
};
