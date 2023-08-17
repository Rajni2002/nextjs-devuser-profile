import { Profile } from "@/types/user/profile";
import { Social } from "@/types/user/social";
import { Portfolio } from "@/types/user/portfolio";
import { Resume } from "@/types/user/resume";

export interface User {
    profile: Profile;
    socials: Social;
    portfolio: Portfolio;
    resume: Resume;
}