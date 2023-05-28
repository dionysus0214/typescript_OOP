{
  // Array
  const fruits: string[] = ['banana', 'apple'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    // fruits.push(); // readonly에서는 불가
  }

  // Tuple -> interfacem type alias, class 권장
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  const [name, age] = student;
  
}