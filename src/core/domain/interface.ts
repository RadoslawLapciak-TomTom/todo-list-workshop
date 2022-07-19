export interface Person {
  name: string;
  surname: string;
}

export interface Person {
  birthday: Date;
}

export interface Pope extends Person {
  pontificate: Date;
}

const pope: Pope = {
  birthday: new Date(1920, 4, 18),
  name: 'Karol',
  surname: 'Wojtyla',
  pontificate: new Date(1978, 9, 16),
};
