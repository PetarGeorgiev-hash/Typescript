interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

const getUserProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => {
    return user[key];
  });
};

class StateObj<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObj("John");
console.log(store.state);
store.state = "Dave"
// store.state = 12; 

const myState = new StateObj<(string | number | boolean)[]>(['dave', 12, false])
console.log(myState.state);
