"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import ChidrenPropType from "@/interfaces/props/layouts";
import { User as AppState } from "@/interfaces/user";
import { Action, ActionTypes, initialState } from './app.reducer';
import { Profile } from '@/types/user/profile';
import { Social } from '@/types/user/social';
import { Education, Experience, Resume } from '@/types/user/resume';

type ContextType = [AppState, (action: Action) => void];

const AppContext = createContext<ContextType>([initialState, () => { }]);

const GlobalContext = ({ children }: ChidrenPropType) => {
    const [appState, setAppState] = useState<AppState>(initialState);
    /* Try to fix this and bring actual useReducer */
    const dispatch = ({ type, payload }: Action) => {
        switch (type) {
            case ActionTypes.SET_PROFILE:
                setAppState(prev => {
                    return { ...prev, profile: payload as Profile }
                })
                break;

            case ActionTypes.SET_SOCIAL:
                setAppState(prev => {
                    return { ...prev, socials: payload as Social }
                })
                break;

            case ActionTypes.SET_RESUME:
                setAppState(prev => {
                    return { ...prev, resume: payload as Resume }
                })
                break;

            case ActionTypes.INIT_STORED:
                setAppState(prev => {
                    return { ...prev, ...payload }
                })
                break;

            case ActionTypes.ADD_RESUME_EXP:
                setAppState(prev => (
                    {
                        ...prev,
                        resume: {
                            ...prev.resume,
                            work_experiences: [
                                ...prev.resume.work_experiences, payload as Experience
                            ]
                        }
                    }
                ))
                break;

            case ActionTypes.ADD_RESUME_EDU:
                setAppState(prev => (
                    {
                        ...prev,
                        resume: {
                            ...prev.resume,
                            education: [
                                ...prev.resume.education, payload as Education
                            ]
                        }
                    }
                ))
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
