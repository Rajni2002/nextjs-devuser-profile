"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import ChidrenPropType from "@/interfaces/props/layouts";
import { User as AppState } from "@/interfaces/user";
import { Action, ActionTypes, initialState } from './app.reducer';

type ContextType = [AppState, (action: Action) => void];

const AppContext = createContext<ContextType>([initialState, () => { }]);

const GlobalContext = ({ children }: ChidrenPropType) => {
    const [appState, setAppState] = useState<AppState>(initialState);

    /* Try to fix this and bring actual useReducer */
    const dispatch = ({ type, payload }: Action) => {
        switch (type) {
            case ActionTypes.SET_PROFILE:
                setAppState(prev => {
                    return { ...prev, profile: payload }
                })
                break;

            case ActionTypes.INIT_STORED:
                setAppState(prev => {
                    return { ...prev, ...payload }
                })
                break;

            default:
                break;
        }
    };

    const contextValue: ContextType = useMemo(() => {
        return [appState, dispatch];
    }, [appState]);


    /* Syncing the localStorage and global Context */
    useEffect(() => {
        let payload;
        if (localStorage.getItem("state")) {
            //checking if there already is a state in localstorage
            //if yes, update the current state 
            payload = JSON.parse(localStorage.getItem("state") || "{}")
        } else {
            payload = initialState
        }
        dispatch({
            type: ActionTypes.INIT_STORED,
            payload,
        });
    }, []);

    useEffect(() => {
        //create and/or set a new localstorage variable called "appState"   
        if (appState !== initialState)
            localStorage.setItem("state", JSON.stringify(appState));

    }, [appState]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export function useGlobalContext() {
    return useContext(AppContext);
}

export default GlobalContext;
