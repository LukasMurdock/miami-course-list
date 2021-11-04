const staticSelection: StaticSelectionProps = {
  semesterYearEnd: '2022',
  selectedSeason: 'Spring',
  courses: [
    {
      courseSubjectCode: 'MKT',
      courseNumber: '335'
    },
    {
      courseSubjectCode: 'ECO',
      courseNumber: '202'
    },
    {
      courseSubjectCode: 'CSE',
      courseNumber: '252'
    },
    {
      courseSubjectCode: 'CSE',
      courseNumber: '271'
    },
    {
      courseSubjectCode: 'MKT',
      courseNumber: '419'
    }
  ]
};

export default staticSelection;

type StaticSelectionProps = {
  semesterYearEnd: string;
  selectedSeason: 'Fall' | 'Winter' | 'Spring' | 'Summer';
  courses: {
    courseSubjectCode: string;
    courseNumber: string;
  }[];
};
