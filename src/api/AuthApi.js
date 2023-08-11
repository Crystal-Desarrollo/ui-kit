import axiosInstance from './apiHelper';

class AuthApi {
  login(data) {
    return axiosInstance.post('/login', data);
  }

  me() {
    return axiosInstance.get('/me');
  }

  async logout() {
    return await axiosInstance.delete('/logout');
  }

  async resetPasswordEmail(data) {
    return await axiosInstance.post('/recover-password', data);
  }

  async resetPassword(data) {
    return await axiosInstance.post('/reset-password', data);
  }
}

export default new AuthApi();
