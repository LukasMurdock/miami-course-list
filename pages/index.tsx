import type { NextPage } from 'next';
import Head from 'next/head';
import CourseSections from '../components/CourseSections';
import staticSelection from '../static-selection';

const semesterYearEnd = staticSelection.semesterYearEnd;
const selectedSeason = staticSelection.selectedSeason;
const courses = staticSelection.courses;

const season = {
  Fall: '10',
  Winter: '15',
  Spring: '20',
  Summer: '30'
};

const filters = {
  academicTerm: semesterYearEnd + season[selectedSeason],
  campusCode: 'O'
};

const Home: NextPage = () => {
  // const { data, error } = useSWR('/api/data', fetcher)

  return (
    <div>
      <Head>
        <title>Miami Course List</title>
        <meta name="description" content="Created by Lukas Murdock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center m-10 font-bold">Miami Course List</h1>
        <div className="max-w-md m-auto">
          {courses.map((course) => (
            <CourseSections
              filters={{
                ...filters,
                courseSubjectCode: course.courseSubjectCode,
                courseNumber: course.courseNumber
              }}
            />
          ))}
        </div>
      </main>

      <footer className="pt-40 pb-12">
        <p className="text-center">Made by Lukas Murdock</p>
      </footer>
    </div>
  );
};

export default Home;
