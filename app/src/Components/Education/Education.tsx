import { myEducation } from "../../myEducation";
import './Education.css';

const Education = () => {
  return (
    <section className="certifications__education">
      <h2>Education</h2>
      <ul>
      {myEducation.map(course => (
        <li>
          {`${course.school} (${course.period})`}
          <br/>
          {course.program} 
        </li>
      ))}
      </ul>
    </section>
  );
}

export default Education;