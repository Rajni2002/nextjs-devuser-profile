import { User as AppState } from "@/interfaces/user";
import { Portfolio } from "@/types/user/portfolio";
import { Profile } from "@/types/user/profile";
import { Education, Experience, Resume } from "@/types/user/resume";
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
    SET_SOCIAL = "SET_SOCIAL",
    SET_RESUME = "SET_RESUME",
    ADD_RESUME_EXP = "ADD_RESUME_EXP",
    ADD_RESUME_EDU = "ADD_RESUME_EDU",
    INIT_STORED = "INIT_STORED",
}

/* Pending */
export type Action = {
    type: ActionTypes;
    payload: Profile | Social | Portfolio | Resume | Experience | Education;
}
