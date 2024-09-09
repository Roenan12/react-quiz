import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuizContext } from "../contexts/QuizContext";

function App() {
  const { status } = useQuizContext();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishedScreen />}
      </Main>
    </div>
  );
}

export default App;

/*
Create advanced state management system with useReducer + Contxt API

1. Duplicate src folder to src-no-context
2. Review data flow and passed props
3. Identify prop drilling problem
4. Use the Context API to fix the (very small) prop drilling problem
5. Create a custom provider component `Quiz Context` with the reducer we created earlier
6. Create a custom provider component `QuizProvider` and provide all the state to the app
7. Create a custom hook to consume state all over the application
8. Delete all unnecessary props
9. Note how you actually need state right in App component. This means you need to wrap the whole App into the context (Try in index.js)
*/
