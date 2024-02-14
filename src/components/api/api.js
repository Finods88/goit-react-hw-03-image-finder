import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '40958355-6a02f68fc5fa06ea934122b62',
    q: '',
    page: '1',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  },
});

export const searchResults = (q, page) => {
  return instance.get('/', {
    params: { ...instance.defaults.params, q, page },
  });
};
