import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        On this site you can make your own phonebook.
      </h1>
    </div>
  );
}
