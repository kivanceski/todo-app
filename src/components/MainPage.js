import Navbar from './layout/Navbar';

const MainPage = (props) => {
  return (
    <>
      <Navbar
        username={props.username}
        darkMode={props.darkMode}
        onChangeDarkMode={props.onChangeDarkMode}
      />
    </>
  );
};

export default MainPage;
