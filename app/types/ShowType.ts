import { Cast } from "./CastType";

export type ShowType = {
    showId: string; 
    title: string; 
    description: string; 
    picture: string; 
    spotifyLink: string; 
    podcast: string;
    color: string;
    order: number;
    castMembers: Cast[];
}