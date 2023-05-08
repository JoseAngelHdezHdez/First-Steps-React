import imgUno from "./assets/images/image1.jpg";
import ButtonState from "./components/ButtonState";
import MyButton from "./components/MyButton";
import WelcomeText from "./components/WelcomeText";
import ListFruts from "./components/fruts/ListFruts";


const App = () => {
  const title = "Mi titulo desde una const";
  const classTitle = "text-center";
  // const pathImage = "src/assets/images/image1.jpg";
  const user = false;

  // console.log(imgUno);

  const fruts = [
    "🍉",
    "🍒",
    "🍑",
    "🍐",
    "🍏",
    "🍎",
    "🥭",
    "🍍",
    "🍋",
    "🍊",
    "🍈",
    "🍇",
  ];

  return (
    <>
      <ButtonState/>

      <h1 className={classTitle}>{title.toUpperCase()}</h1>
      <img src={imgUno} alt="" />

      <MyButton text="boton 1"></MyButton>
      <MyButton text="boton 2"></MyButton>
      <MyButton text="boton 3"></MyButton>

      <WelcomeText user={user} />
      <ListFruts fruts={fruts}/>
    </>
  );
};

export default App;
