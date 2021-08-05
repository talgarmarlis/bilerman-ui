import apiClient from 'services/axios'

// eslint-disable-next-line import/prefer-default-export
export const articleService = {
  getArticles,
  getArticlesByUser,
  getArticlesByTagName,
  getArticleById,
  publishDraft,
  getSavedArticles,
  getSavedArticleIds,
  saveArticle,
  getClappedArticles,
  getClappedArticleIds,
  clapArticle
};

function getArticles(page, size){
  let url = `/articles?`
  if(page) url = `${url}page=${page}`;
  if(size) url = `${url}&size=${size}`;
  return apiClient.get(url);
}

function getArticlesByUser(userId, page, size){
  let url = `/articles/users/${userId}?`
  if(page) url = `${url}&page=${page}`;
  if(size) url = `${url}&size=${size}`;
  return apiClient.get(url);
}

function getArticlesByTagName(tagName, page, size){
  let url = `/articles/tags?`
  if(tagName) url = `${url}tagName=${tagName}`;
  if(page) url = `${url}&page=${page}`;
  if(size) url = `${url}&size=${size}`;
  return apiClient.get(url);
}

function getArticleById(articleId) {
  return apiClient.get(`/articles/${articleId}`);
}

function publishDraft(draftToPublish){
  return apiClient.post('/articles/publish', draftToPublish);
}

function getSavedArticles(page, size){
  let url = `/articles/saved?`
  if(page) url = `${url}&page=${page}`;
  if(size) url = `${url}&size=${size}`;
  return apiClient.get(url);
}

function getSavedArticleIds(){
  return apiClient.get(`/articles/saved/ids`);
}

function saveArticle(id){
  return apiClient.post(`/articles/${id}/save`);
}

function getClappedArticles(page, size){
  let url = `/articles/clapped?`
  if(page) url = `${url}&page=${page}`;
  if(size) url = `${url}&size=${size}`;
  return apiClient.get(url);
}

function getClappedArticleIds(){
  return apiClient.get(`/articles/clapped/ids`);
}

function clapArticle(id){
  return apiClient.post(`/articles/${id}/clap`);
}
