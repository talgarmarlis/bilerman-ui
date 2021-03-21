import apiClient from 'services/axios'

// eslint-disable-next-line import/prefer-default-export
export const commentService = {
  getCommentsByArticle,
  getCommentById,
  saveComment,
  deleteComment,
  getRepliesByComment,
  getReplyById,
  saveReply,
  deleteReply
};

function getCommentsByArticle(articleId, page, size){
  let url = `/comments?`
  if(articleId) url = `${url}articleId=${articleId}`;
  if(page) url = `${url}&page=${page}`;
  if(size) url = `${url}&size=${size}`;
  return apiClient.get(url);
}

function getCommentById(commentId) {
  return apiClient.get(`/comments/${commentId}`);
}

function saveComment(comment){
  return apiClient.post('/comments', comment);
}

function deleteComment(id){
  return apiClient.delete(`/comments/${id}`);
}

function getRepliesByComment(commentId, page, size){
  let url = `/replies?`
  if(commentId) url = `${url}commentId=${commentId}`;
  if(page) url = `${url}&page=${page}`;
  if(size) url = `${url}&size=${size}`;
  return apiClient.get(url);
}

function getReplyById(replyId) {
  return apiClient.get(`/replies/${replyId}`);
}

function saveReply(reply){
  return apiClient.post('/replies', reply);
}

function deleteReply(id){
  return apiClient.delete(`/replies/${id}`);
}
