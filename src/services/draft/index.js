import apiClient from 'services/axios'

// eslint-disable-next-line import/prefer-default-export
export const draftService = {
  getDrafts,
  getUserDrafts,
  getDraftById,
  saveDraft,
  deleteDraft,
}

function getDrafts(page, size, published) {
  let url = `/drafts?`
  if (page) url = `${url}page=${page}`
  if (size) url = `${url}&size=${size}`
  if (published) url = `${url}&published=${published}`
  return apiClient.get(url)
}

function getUserDrafts(userId, published, page, size) {
  let url = `/drafts?`
  if (userId) url = `${url}userId=${userId}`
  url = `${url}&published=${published}`
  if (page) url = `${url}&page=${page}`
  if (size) url = `${url}&size=${size}`
  return apiClient.get(url)
}

function getDraftById(id) {
  return apiClient.get(`/drafts/${id}`)
}

function saveDraft(draft) {
  return apiClient.post('/drafts', draft)
}

function deleteDraft(id) {
  return apiClient.del(`/drafts/${id}`)
}
