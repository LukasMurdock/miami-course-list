export type StaticSelectionProps = {
  semesterYearEnd: string;
  selectedSeason: 'Fall' | 'Winter' | 'Spring' | 'Summer';
  courses: {
    courseSubjectCode: string;
    courseNumber: string;
  }[];
};

export type CourseSchedule = {
  startDate: string; // 2022-01-24
  endDate: string; // 2022-05-13
  startTime: string; // 08:30
  endTime: string; // 09:50
  room: string; // 0024
  buildingCode: string; // FSB
  buildingName: string; // Farmer School of Business
  days: string; // TR
  scheduleTypeCode: 'CLAS';
  scheduleTypeDescription: 'Class';
};

export type CourseSections = {
  courseSections: {
    academicTerm: string; // 202220
    academicTermDesc: string; // Spring Semester 2021-22
    courseId: string; // 63511
    recordNumber: string; // 1
    courseCode: string; // MKT 335 A
    schoolCode: string; // BU
    schoolName: string; // Farmer School of Business
    deptName: string; // Marketing
    deptCode: string; // MKT
    standardizedDivisionCode: string; // FSB
    standardizedDivisionName: string; // Farmer School of Business
    standardizedDeptCode: string; // MKT
    standardizedDeptName: string; // Marketing
    courseTitle: string; // Analytical Res and Reason MKT
    instructionalType: string; // L
    instructionalTypeDescription: string; // Lecture
    courseSubjectCode: string; // MKT
    courseSubjectDesc: string; // Marketing
    courseNumber: string; // 335
    courseSectionCode: string; // A
    courseStatus: string; // Active
    campusCode: 'O';
    campusName: 'Oxford';
    creditHoursDesc: string; // 3
    enrollmentCountMax: string; // 20
    enrollmentCountCurrent: string; // 8
    enrollmentCountActive: string; // 8
    enrollmentCountAvailable: string; // 12
    partOfTermCode: string; // 1
    partOfTermName: string; // Full Semester
    partOfTermStartDate: string; // 2022-01-24
    partOfTermEndDate: string; // 2022-05-13
    gradeRequiredFinal: string; // true
    courseDescription: string; // desc
    prntInd: string; // Y
    courseSchedules: CourseSchedule[];
    instructors: {
      username: string;
      nameLast: string;
      nameFirst: string;
      nameMiddle: string;
      nameDisplayInformal: string;
      nameDisplayFormal: string;
    }[];
    attributes: {
      attributeCode: string; // BUS
      attributeDescription: string; // Bus Course for Surcharge
    }[];
    crossListedCourses: {}[];
  }[];
};
