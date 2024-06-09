import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "../constants";
import { Data } from "../model/rick-and-morty.model";
import { Episode } from "../model/episode.model";
import { Character } from "../model/character.model";
import { Location } from "../model/location.model";

@Injectable()
export class RickAndMortyService{
    constructor(private http : HttpClient){
    }

    public getCharacters(next?:string){
        return this.http.get<Data<Character>>(next? next : Constants.URL+"/character");
    }

    public findCharacterById(id: string){
        return this.http.get<Character>('https://rickandmortyapi.com/api/character/'+id);
    }

    public findCharacterByUrl(url: string){
        return this.http.get<Character>(url);
    }

    public getEpisodes(next?: string){
        return this.http.get<Data<Episode>>(next? next : Constants.URL+"/episode");
    }

    public findEpisodeById(id: string){
        return this.http.get<Episode>('https://rickandmortyapi.com/api/episode/'+id);
    }

    public findEpisodeByUrl(url: string){
        return this.http.get<Episode>(url);
    }

    public getLocation(next?: string){
        return this.http.get<Data<Location>>(next? next : Constants.URL+"/location");
    }

    public findLocationById(id: string){
        return this.http.get<Location>('https://rickandmortyapi.com/api/location/'+id);
    }

    public findLocationByUrl(url: string){
        return this.http.get<Location>(url);
    }
}