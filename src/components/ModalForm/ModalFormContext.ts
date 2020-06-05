import React from 'react'

export interface ModalFormContextProp<T> {
    state?: T | T[];
    setState: (value?: T | T[]) => void;
}

const ModalFormContext = React.createContext<ModalFormContextProp<any>>(
    {
        state: undefined,
        setState: () => { },
    }
);

export const ModalFormContextProvider = ModalFormContext.Provider
export const ModalFormContextConsumer = ModalFormContext.Consumer

export default ModalFormContext

// headerVisible
// setHeaderVisible