export enum Gender { Male, Female };

type SectionVisibility = {
    follwers_and_following: boolean;
    xp: boolean;
    badges: boolean;
}

export type Profile = {
    displayName: string;
    about: string;
    profession: "Student" | "Developer" | "Other";
    dob: Date;
    Gender: Gender;
    visibility: SectionVisibility
}
