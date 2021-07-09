import { Customize } from '../private';
import { Entry } from '../entry';

export const Private = (props) => (
  <Entry component={Customize} history={props.history} />
);
