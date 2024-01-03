import { Certificate } from '../../Types/types';
import './CertificateCard.css';

const CertificateCard = ({ certificate }: PropType) => {
  return (
    <div className='certificate-card-wrappper'>
      <div className='certificate-card'>
        <img src={certificate.picture} />
      </div>
    </div>
  );
}

type PropType = { certificate: Certificate }
export default CertificateCard;