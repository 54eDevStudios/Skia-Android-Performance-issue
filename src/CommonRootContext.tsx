import React, {useState} from 'react';

export interface CommonRootContextState {
  updateNumber: (updateNumber: number) => void;
  randomNumber: number;
}

export const CommonRootContext = React.createContext<CommonRootContextState>(
  {},
);

export function useCommonRootContext() {
  return React.useContext(CommonRootContext);
}

export const CommonRootContextProvider = ({children}: {children: any}) => {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  const updateNumber = (updateNumber: number) => {
    setRandomNumber(updateNumber);
  };

  return (
    <CommonRootContext.Provider
      value={{
        updateNumber,
        randomNumber,
      }}>
      {children}
    </CommonRootContext.Provider>
  );
};
