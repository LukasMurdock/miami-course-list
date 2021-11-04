// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { CourseSections } from '../../../types/types';

// http://localhost:3000/api/course/202220.json?campusCode=O&courseSubjectCode=MKT&courseNumber=335

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CourseSections>
) {
  // const { campusCode, courseSubjectCode, courseNumber, courseSection } =
  //   req.query;
  // const url = courseSection.replace('.json', '') + courseNumber;

  const query = req.url?.replace('/api/course', '');
  const url = 'http://ws.miamioh.edu/courseSectionV2' + query;

  console.log('request for ' + query + ' recieved');

  async function fetchCourses() {
    const response = await fetch(url);

    // console.log(response.ok);
    // console.log(response.status);
    const json = await response.json();
    return json;
  }

  await fetchCourses().then((courses: CourseSections) => {
    res.status(200).json({ ...courses });
  });
}
