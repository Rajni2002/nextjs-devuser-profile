type username = string;

type GithubLink = `https://github.com/${username}`;
type LinkedInLink = `https://www.linkedin.com/${username}`;
type FacebookLink = `https://facebook.com/${username}`;
type InstagramLink = `https://instagram.com/${username}`;
type BehanceLink = `https://www.behance.net${username}`;

export type Social = {
    github: GithubLink;
    linkedin: LinkedInLink;
    facebook: FacebookLink;
    instagram: InstagramLink;
    behance: BehanceLink;
}