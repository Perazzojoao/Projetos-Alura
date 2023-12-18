import { ReactNode, createContext, useContext, useState } from "react";

type TimerProviderProps = {
  children: ReactNode;
}

type Context = {
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

const TimerContext = createContext({} as Context);

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [ time, setTime ] = useState('');
  return ( 
    <TimerContext.Provider value={{time, setTime}}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer () {
  const { time, setTime } = useContext(TimerContext);

  function setTimer (tempo: string) {
    setTime(tempo);
  }

  function startTimer () {
   
  }

  return {time, setTimer};
}
 
export default TimerProvider;