export type CommonProp = {
    start_date: Date;
    end_date: Date | 'Present';
    description: string;
    website: string;
    location: string;
    avatar_url: string;
}

export interface EducationType {
    degree: string;
    college_name: string;
}

export interface ExperienceType {
    company_name: string;
    role: string;
}

export type Experience = CommonProp & ExperienceType

export type Education = CommonProp & EducationType

export type NameUrlTemplate = {
    label: string;
    icon: string;
}

export type Resume = {
    about_me: string;
    work_experiences: Experience[];
    education: Education[];
    tech_skills: NameUrlTemplate[];
    interests: string[];
    languages: NameUrlTemplate[]
}