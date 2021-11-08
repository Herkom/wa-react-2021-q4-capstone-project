import { API_BASE_URL } from '../constants';
import { useURLParams } from './useURLParams';

export function useURLMaker(apiRef, doctype, pageSize, optional, optValue){
    
    const optParamResult = useURLParams(optional, optValue);

    const docParam = doctype ? 
        `&q=${encodeURIComponent(`[[at(document.type, "${doctype}")]]`)}`
        : '';
    const optParam = optional ?
        `&q=${encodeURIComponent(optParamResult)}`
        : '';
    const pageParam = pageSize ?
        `&lang=en-us&pageSize=${pageSize}`
        : '';

    const URL = `${API_BASE_URL}/documents/search?ref=${apiRef}${docParam}${optParam}${pageParam}`;

    return URL
}
