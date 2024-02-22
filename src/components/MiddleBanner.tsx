import { useState } from 'react';
import '../styles/mi.scss'
import IChiffer from '../types/chiffer';
import CHIFFER from '../types/chiffer-data';
import MiddleCard from './MiddleCard';

const MiddleBanner = () => {
    const [chiffers] = useState<IChiffer[]>(CHIFFER);

  return (
    <div className="mi">
        {
          chiffers.map(chiffer => {
            return <MiddleCard 
                key={chiffer.id} 
                card={chiffer}  />
            })
        }
    </div>
  )
}

export default MiddleBanner