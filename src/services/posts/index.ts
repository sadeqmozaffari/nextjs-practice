import {api} from '../api';
const getPosts = async (locale: string='fa') => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}post?locale=${locale}`,
    {
      next: {
        tags: ['posts'],
      },
    }
  );
  return await response.json();
};
const getPost = async (id: number, locale: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}post/${id}?locale=${locale}`,
    {
      next: {
        tags: ['posts'],
      },
    }
  );
  return await response.json();
};
const addPost = (data: any) => api.post('/post', data);
export {getPosts, getPost, addPost};
