{
  // num
  const num:number = 1;

  // string
  const str:string = 'hello';

  // boolean
  const bool:boolean = false;

  // undefined: 텅텅 비었는지 아닌지 결정되지 않은 상태
  let age: number | undefined;
  age = undefined;
  age = 20;

  function find(): number | undefined {
    return undefined;
  }

  // null: 텅텅 비었음
  let person: string | null;

  // unknown: 가능하면 쓰지 않는 게 좋음
  let notSure: unknown = 0;
  notSure = 'she';
  notSure = true;

  // any: 가능하면 쓰지 않는 게 좋음
  let anything: any = 0;
  anything = 'time';

  // void: 함수에서 어떠한 것도 return하지 않을 때
  function print(): void {
    return;
  }

  // never: 함수에서 return하지 않음을 명시하기 위해 사용
  function throwError(message: string): never {
    throw new Error(message);
  }

  // object: 어떤 타입인지 명시해서 쓰는 게 좋음
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({animal: 'cat'});
}