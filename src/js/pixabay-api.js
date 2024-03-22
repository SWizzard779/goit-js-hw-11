export function getPictures(query){
    const BASE_URL = 'https://pixabay.com/api/'
    const params = new URLSearchParams({
        key: '42978821-e3c6f538b5791c0a766c3ba19',
        q: query,
        image_type: 'photo', 
        orientation: 'horizontal',
        safesearch: true
    })
    const url = `${BASE_URL}?${params}`;
    const images = fetch(url)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => console.log(error))


    return images;
}
