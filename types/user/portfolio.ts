type SharedProfile = {
    name: string;
    photoUrl: string;
}

type CommonProperties = {
    id: string;
    title: string;
    url: string;
    createdOn: Date;
    sharedWith?: SharedProfile[];
    isActive: boolean;
    program_language?: string[];
}

type Playground = CommonProperties & {
    badgeUrl: string;
}

type Project = CommonProperties & {
    badges: string[];
    coverUrl: string
}

export type Portfolio = {
    playgrounds: Playground[];
    projects: Project[];
}