import { jobs } from '../../jobs';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h1>Work Experience</h1>
      <div className="work-experience__info">
        {jobs.map(job => {
          return (
            <div className="work-experience__job">
              <h2>{job.title}</h2>
              <p className='job__period'>{`(${job.period})`}</p>
              <ul>{listResponsibilites(job.responsibilities)}</ul>
            </div>
          )
        })}
      </div>
    </section>
  );
}

const listResponsibilites = (responsibilities: string) => {
  const respoArray = responsibilities.split('.');
  return respoArray.map(respnsibility => <li>{respnsibility}</li>)
}

export default WorkExperience;