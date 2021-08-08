import apiClient from 'services/axios'

// eslint-disable-next-line import/prefer-default-export
export const userService = {
  getUser,
  getUsers,
  updateUser,
  uploadAvatar,
  uploadCover
};

function getUsers(){
  return apiClient.get(`/users`);
}

function getUser(id){
  return apiClient.get(`/users/${id}`);
}

function updateUser(user) {
  return apiClient.post(`/users`, user)
}


function uploadAvatar(file){
  const formData = new FormData()
  formData.append('file', file)
  return apiClient.post('/users/avatar', formData);
}

function uploadCover(file){
  const formData = new FormData()
  formData.append('file', file)
  return apiClient.post('/users/cover', formData);
}
