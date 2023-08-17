import { Profile } from "@/types/user/profile";
import { Social } from "@/types/user/social";
// import { Portfolio } from "@/types/user/portfolio"; 

export interface User {
    profile: Profile;
    socials: Social;
    // portfolio: Portfolio;
}