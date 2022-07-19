interface A {
  foo: string;
}

interface B {
  bar: string;
}

type Intersection = A & B;

const processIntersection = (intersection: Intersection) => {
  console.log(intersection.foo, intersection.bar);
};

const intersection: Intersection = {
  bar: 'asd',
  foo: 'asdasd',
};

const complexIntersection: Intersection & { test: 'test' } = {
  bar: 'string',
  foo: 'test',
  test: 'test',
};

processIntersection(intersection);
processIntersection(complexIntersection);

interface CommonA {
  foo: string;
}

interface CommonB {
  foo: number;
}

// interface CommonA {
//   foo: 'a';
// }

// interface CommonB {
//   foo: 'a' | 'b';
// }

type CommonIntersection = CommonA & CommonB;

// const commonIntersection: CommonIntersection = {
//   foo: 'test',
// };

interface UnA {
  type: 'A';
  valA: string;
}

interface UnB {
  type: 'B';
  valB: string;
}

type Union = UnA | UnB;

const exhaustiveCheck = (_: never) => {
  throw Error('2137');
};

const processUnion = (union: Union) => {
  console.log(union.type);
  //   console.log(union.valA);
  //   console.log(union.valB);

  switch (union.type) {
    case 'A': {
      console.log(union.valA);
      break;
    }
    case 'B': {
      console.log(union.valB);
      break;
    }
    default: {
      exhaustiveCheck(union);
    }
  }
};

const getNumberOrNull = (): number | null =>
  Math.random() < 0.51 ? 2137 : null;

const numOrNull: number | null = getNumberOrNull();

// Math.floor(numOrNull); error
if (numOrNull) {
  console.log(Math.floor(numOrNull));
}

//disable strict flag

export {};
