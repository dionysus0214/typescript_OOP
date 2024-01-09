{
  // Enum for JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2})
  let dayOfToday = DAYS_ENUM.MONDAY;

  // Enum for TypeScript: 타입스크립트에서는 enum보다 unoion이 유용(타입 지정 때문)
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Monday) // 1
  let day: Days = Days.Saturday;
  day = Days.Friday;
  // day = 10; WRONG!

  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let daysOfWeek: DaysOfWeek = 'Tuesday';
  daysOfWeek = 'Wednesday';
}