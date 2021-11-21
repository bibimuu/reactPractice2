export const StyledJSX = () => {
  return (
    <>
      <div className="container">
        <p className="title">inline style</p>
        <button className="button">fight</button>
      </div>

      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          margin: 0px;
          color: #3d84a8;
        }

        .button {
          background-color: #abedd8;
          border: none;
          padding: 16px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
