import { ReactNode, createContext, useContext, useState } from "react";
import { backToMinute, toSecond } from "../Cronometro/Relogio/toDate";

type TimerProviderProps = {
  children: ReactNode;
}

type Context = {
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  active: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimerContext = createContext({} as Context);

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [ time, setTime ] = useState('');
  const [ active, setIsActive] = useState(false);

  return ( 
    <TimerContext.Provider value={{time, setTime, active, setIsActive}}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer () {
  const { time, setTime, active, setIsActive } = useContext(TimerContext);

  function setTimer (tempo: string) {
    setTime(tempo);
  }

  function startTimer () {
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

  return {time, setTimer, startTimer, active, setIsActive};
}
 
export default TimerProvider;