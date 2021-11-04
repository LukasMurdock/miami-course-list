import { CourseSchedule } from '../types/types';

const MiniCalTimeBlock = ({
  courseTime,
  day
}: {
  courseTime: CourseSchedule;
  day: 'M' | 'T' | 'W' | 'R' | 'F';
}) => {
  if (!courseTime.days?.includes(day)) return <div></div>;

  return (
    <div className="bg-gray-50 text-center rounded-lg text-xs">
      <p>{day}</p>
      <p>{courseTime.startTime}</p>
      <p>{courseTime.endTime}</p>
      <p>
        {courseTime.buildingName} {courseTime.room}
      </p>
    </div>
  );
};

export default MiniCalTimeBlock;
