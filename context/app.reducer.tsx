import { User as AppState } from "@/interfaces/user";
import { Portfolio } from "@/types/user/portfolio";
import { Profile } from "@/types/user/profile";
import { Resume } from "@/types/user/resume";
import { Social } from "@/types/user/social";

export const initialState: AppState = {
    profile: {
        displayName: "",
        about: "",
        visibility: {
            follwers_and_following: false,
            xp: false,
            badges: false
        },
        profilePic: null,
        dob: new Date()
    },
    socials: {
    },
    portfolio: {
        playgrounds: [],
        projects: []
    },
    resume: {
        about_me: "",
        work_experiences: [],
        education: [],
        tech_skills: [],
        interests: [],
        languages: []
    }
};

export enum ActionTypes {
    SET_PROFILE = "SET_PROFILE",
    INIT_STORED = "INIT_STORED"
}

/* Pending */
export type Action = {
    type: ActionTypes;
    payload: Profile | Social | Portfolio | Resume;
}

export const dispatch = (state: AppState, action: Action) => {
    console.log(state, action);

};