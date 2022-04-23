import styles from './<%= normalizedTitle %>.module.scss';

/* eslint-disable-next-line */
export interface <%= normalizedName %>Props {}

export function <%= normalizedName %>Widget(props: <%= normalizedName %>Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to <%= normalizedName %></h1>
    </div>
  );
}

export default <%= normalizedName %>Widget;
