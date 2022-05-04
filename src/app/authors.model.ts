export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export const authors = [
  {
    id: 1,
    firstName: 'Trung',
    lastName: 'Hieu',
    email: 'trunghieu@gmail.com',
    gender: 'Male',
    ipAddress: 'Ha Nam',
  },
  {
    id: 2,
    firstName: 'Quan',
    lastName: 'Que',
    email: 'coco@gmail.com',
    gender: 'Female',
    ipAddress: 'Trung Quoc',
  },
];
