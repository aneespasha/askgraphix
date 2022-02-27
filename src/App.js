import './App.css';
import Header from './componants/Header';
import Footer from './componants/Footer';
// import TextForm from './componants/Textform';
import MyTextForm from './componants/MyTextform';
import About from './componants/About';
import React, { useState } from 'react';

function App(props) {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [btntextTwo, setBtnTextTwo] = useState("Enable Light Mode");

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setBtnTextTwo("Enable Light Mode");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnTextTwo("Enable Dark Mode");
    }
  }
  return (
    <>
      <Header myHeader='My React Main Title' mode={mode} />
      <div className='container text-center mt-3'>
        <h1>{props.myHeader}</h1>

        {/* <TextForm /> */}
        
        <MyTextForm />
        
        {/* <h2>{props.mySubHeader}</h2> */}

        <About toggleMode={toggleMode} />
        <Footer />
      </div>
    </>
  );
}
// Header.propTypes = {myHeader: PropTypes.string, mySubHeader: PropTypes.string.isRequired};
App.defaultProps = {
  myHeader: 'My React Main Title',
  mySubHeader: 'My React Sub Title'
}
export default App;
