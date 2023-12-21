import { myEducation } from "../../myEducation";
import './Education.css';

const Education = () => {
  return (
    <section className="certifications__education">
      <h2>Education</h2>
      <ul>
      {myEducation.map(course => (
        <li>
          <span className="course__school">{course.school}</span>
          <span className="course__program">{course.program}</span> 
          <span className="course__duration">{course.period}</span>
        </li>
      ))}
      </ul>
    </section>
  );
}

export default Education;