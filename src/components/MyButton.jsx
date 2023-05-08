const MyButton = ({ text }) => {
    // console.log(props);  Los props son un objeto y pueden ser varios
    
    const handleClickButton = (title) => {
      console.log('miralo' + title)
    }
    
    return (
      <button
        onClick={() => handleClickButton(text)}
      >
        {text}
      </button>
    );
  };

  export default MyButton;