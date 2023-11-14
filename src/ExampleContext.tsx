import React, {useState} from 'react';

export interface ExampleContextState {
  updateNumber: (updateNumber: number) => void;
  randomNumber: number;
}

export const ExampleContext = React.createContext<ExampleContextState>(
  {},
);

export function useExampleContext() {
  return React.useContext(ExampleContext);
}

export const ExampleContextProvider = ({children}: {children: any}) => {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  const updateNumber = (updateNumber: number) => {
    setRandomNumber(updateNumber);
  };

  return (
    <ExampleContext.Provider
      value={{
        updateNumber,
        randomNumber,
      }}>
      {children}
    </ExampleContext.Provider>
  );
};
