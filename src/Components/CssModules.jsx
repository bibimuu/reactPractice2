import classes from "./CssModules.module.scss";

export const CssModules = () => {
  const { container, title, button } = classes;
  return (
    <>
      <div className={container}>
        <p className={title}>inline style</p>
        <button className={button}>Fight!</button>
      </div>
    </>
  );
};
