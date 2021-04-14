import apiClient from 'services/axios'

// eslint-disable-next-line import/prefer-default-export
export const  tagService = {
  getArticlesByTagName
};

function getArticlesByTagName(tagName, page, size){
  let url = `/articles/tags?`
  if(tagName) url = `${url}tagName=${tagName}`;
  if(page) url = `${url}&page=${page}`;
  if(size) url = `${url}&size=${size}`;
  return apiClient.get(url);

}

