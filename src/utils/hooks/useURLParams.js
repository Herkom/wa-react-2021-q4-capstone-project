import { URL_PARAMS } from "utils/constants";

export function useURLParams(optional, optValue){

    let selected = URL_PARAMS[optional];

    if(optValue){
        selected = selected.replace(`{${optional}}`, optValue);
    }

    return selected;
};
