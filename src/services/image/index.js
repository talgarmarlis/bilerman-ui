import apiClient from 'services/axios'

// eslint-disable-next-line import/prefer-default-export
export const imageService = {
  upload,
  download
};

function upload(file){
  const formData = new FormData()
  formData.append('file', file)
  return apiClient.post('/images', formData);
}

function download(id){
  return apiClient.get(`/images/${id}`);
}
