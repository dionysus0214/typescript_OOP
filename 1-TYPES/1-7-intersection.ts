{
  // Intersections Type: and
  type Student = {
    name: string;
    score: number;
  }
  type Worker = {
    employeeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work())
  }
  
  internWork({
    name: 'jeje',
    score: 10,
    employeeId: 4716,
    work: () => {}
  });
}