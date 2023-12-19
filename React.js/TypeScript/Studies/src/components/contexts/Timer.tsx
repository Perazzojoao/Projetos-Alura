import { ReactNode, createContext, useContext, useState } from "react";
import { backToMinute, toSecond } from "../Cronometro/Relogio/toDate";

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

  function startTimer (active: boolean) {
    const timerInterval = setInterval(interval, 1000);
    
    function interval () {
      if (active) {
        setTime((prev) => {
          const prevConvertido = toSecond(prev) - 1;
          if (prevConvertido > 0) {
            return backToMinute(prevConvertido);
          }
          clearInterval(timerInterval);
          return backToMinute(prevConvertido > 0 ? prevConvertido : 0);
        });
      } else {
        clearInterval(timerInterval);
      }
    }
  }

  return {time, setTimer, startTimer};
}
 
export default TimerProvider;