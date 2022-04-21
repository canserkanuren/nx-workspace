import { Alert } from 'react-bootstrap';
import styles from './console-mfe-1.module.scss';

/* eslint-disable-next-line */
export interface ConsoleMfe1Props {}

export function ConsoleMfe1(props: ConsoleMfe1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ConsoleMfe1! My beautiful mfe!!</h1>
      <Alert>Hello this is an alert</Alert>
    </div>
  );
}

export default ConsoleMfe1;
