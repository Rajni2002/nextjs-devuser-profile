import { User as AppState } from "@/interfaces/user";
import { Profile } from "@/types/user/profile";

export const initialState: AppState = {
    profile: {
        displayName: "",
        about: "",
        visibility: {
            follwers_and_following: false,
            xp: false,
            badges: false
        },
        profilePic: "",
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
    payload: Profile;
}
