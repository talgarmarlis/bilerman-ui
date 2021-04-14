import apiClient from 'services/axios'

// eslint-disable-next-line import/prefer-default-export
export const tagService = {
  getTags,
  getTagByName,
  getFamiliarTags
};

function getTags(){
  return apiClient.get(`/tags`);
}

function getTagByName(tagName){
  return apiClient.get(`/tags/${tagName}`);
}

function getFamiliarTags(tagName, size){
  let url = `/tags/familiar?`
  if(tagName) url = `${url}&tagName=${tagName}`;
  if(size) url = `${url}&size=${size}`;
  return apiClient.get(url);
}

