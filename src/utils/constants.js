export const API_BASE_URL = 'https://wizeline-academy.cdn.prismic.io/api/v2';

export const URL_PARAMS = {
    featured: '[[at(document.tags, ["Featured"])]]',
    searchTerm: '[[fulltext(document, "{searchTerm}")]]',
    productId: '[[:d=at(document.id,"{productId}")]]',
};