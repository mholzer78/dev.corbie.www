const iconSize = 40;

export interface Page {
  id: string;
  name: string;
  image: string;
  imageSize: number;
}

export const allPages = [
  { id: 'home', name: 'Home', image: 'corbie', imageSize: 60 },
  {
    id: 'colorConvert',
    name: 'Color Convert *',
    image: 'color',
    imageSize: iconSize,
  },
  {
    id: 'passwordGenerator',
    name: 'Password Generator',
    image: 'password',
    imageSize: iconSize,
  },
  {
    id: 'permissionGenerator',
    name: 'Permission Generator',
    image: 'permission',
    imageSize: iconSize,
  },
    {
    id: 'changeCase',
    name: 'Change Case',
    image: 'changeCase',
    imageSize: iconSize,
  },
];
