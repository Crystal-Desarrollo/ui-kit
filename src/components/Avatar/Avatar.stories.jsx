import Avatar from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const Primary = {};

export const CustomSize = {
  args: {
    size: 200,
  },
};

export const ProfilePicture = {
  args: {
    profile_picture: {
      url: 'https://avatars.githubusercontent.com/u/36794905?v=4',
    },
  },
};
