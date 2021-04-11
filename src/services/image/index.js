import apiClient from 'services/axios'

// eslint-disable-next-line import/prefer-default-export
export const imageService = {
  upload,
  download
};

function upload(category, file){
  const formData = new FormData()
  formData.append('file', file)
  return apiClient.post(`/images/${category}`, formData);
}

function download(category, id){
  return apiClient.get(`/images/${category}/${id}`);
}
