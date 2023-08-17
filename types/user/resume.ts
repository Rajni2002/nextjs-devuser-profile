type CommonProp = {
    start_date: Date;
    end_date: Date | 'Present';
    description: string;
    website: string;
    location: string;
    avatar_url: string;
}

type Experience = CommonProp & {
    company_name: string;
    role: string;
}

type Education = CommonProp & {
    degree: string;
    college_name: string;
}

export type NameUrlTemplate = {
    name: string;
    url: string;
}

export type Resume = {
    about_me: string;
    work_experiences: Experience[];
    education: Education[];
    tech_skills: NameUrlTemplate[];
    interests: string[];
    languages: NameUrlTemplate[]
}