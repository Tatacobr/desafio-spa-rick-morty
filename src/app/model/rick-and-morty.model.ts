export interface RickAndMorty{
    characters?: string;
    locations?: string;
    episodes?: string;
}

export interface Data<T>{
    info?: Info;
    results?: T[];
}

export interface Info {
    count?: number;
    pages?: number;
    next?: string;
    prev?: string;
}
  