import { Certificate } from '../../types';
import './CertificateCard.css';

const CertificateCard = ({certificate} : PropType) => {
  return (
    <div className='certificate-card-wrappper'>
      <div className='certificate-card'>
        <div className="certificate-card__date"><span>{certificate.day}</span><span>{certificate.month}</span></div>
      </div>
    </div>
  );
}

type PropType = {certificate: Certificate}
export default CertificateCard;