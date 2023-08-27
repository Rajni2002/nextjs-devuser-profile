type SectionVisibility = {
    follwers_and_following: boolean;
    xp: boolean;
    badges: boolean;
}


export type Profile = {
    profilePic: string;
    displayName: string;
    about: string;
    profession?: "Student" | "Developer" | "Other";
    dob: Date;
    Gender?: "Male" | "Female";
    visibility: SectionVisibility
}
