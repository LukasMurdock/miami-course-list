import useSWR from 'swr';
import { CourseSections } from '../types/types';
import MiniCalTimeBlock from './MiniCalTimeBlock';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const formatDays = (letters: string) => {
  // const replace = {
  //   M: 'Monday',
  //   T: 'Tuesday',
  //   W: 'Wednesday',
  //   R: 'Thursday',
  //   F: 'Friday'
  // } as {
  //   [key: string]: string;
  // };
  // const days = letters.split('').map((letterDay: string) => replace[letterDay]);
  // return days.join(' ');
  return letters;
};

const CourseSections = ({
  filters: { academicTerm, campusCode, courseSubjectCode, courseNumber }
}: {
  filters: {
    academicTerm: string;
    campusCode: string;
    courseSubjectCode: string;
    courseNumber: string;
  };
}) => {
  // http://localhost:3000/api/course/202220.json?campusCode=O&courseSubjectCode=MKT&courseNumber=335

  const query =
    academicTerm +
    '.json?campusCode=' +
    campusCode +
    '&courseSubjectCode=' +
    courseSubjectCode +
    '&courseNumber=' +
    courseNumber;
  const url = '/api/course/' + query;

  const { data, error }: { data?: CourseSections; error?: any } = useSWR(
    url,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h2 className="text-lg font-bold">
        {courseSubjectCode} {courseNumber} {data.courseSections[0].courseTitle}
      </h2>
      <div>
        {data.courseSections.map((courseSection) => (
          <div className="p-4 m-1 rounded-lg hover:bg-gray-50">
            <div className="flex">
              <h3 className="font-semibold flex-grow">
                {courseSection.courseSubjectCode} {courseSection.courseNumber}{' '}
                {courseSection.courseSectionCode}
              </h3>
              <p className="flex-shrink">
                <span className="text-gray-100 bg-gray-700 text-xs rounded-full px-2 py-1">
                  {courseSection.courseId}
                </span>
              </p>
            </div>
            <p>
              {courseSection.enrollmentCountCurrent} /{' '}
              {courseSection.enrollmentCountMax}
            </p>
            <div>
              {courseSection.courseSchedules.map((courseTime) => (
                <div>
                  <div className="grid grid-cols-5">
                    <MiniCalTimeBlock courseTime={courseTime} day="M" />
                    <MiniCalTimeBlock courseTime={courseTime} day="T" />
                    <MiniCalTimeBlock courseTime={courseTime} day="W" />
                    <MiniCalTimeBlock courseTime={courseTime} day="R" />
                    <MiniCalTimeBlock courseTime={courseTime} day="F" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSections;
