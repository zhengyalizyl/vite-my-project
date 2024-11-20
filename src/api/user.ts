import request from '@/utils/request';

type LoginType = {
  username: string;
  password: string;
};
export function login(data: LoginType) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  });
}
