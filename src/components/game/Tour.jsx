import React, { useContext } from 'react';
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd';
import { newSteps } from '../utilities/steps.js';
import styles from '../styles/Tour.scss';

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    }
  },
  useModalOverlay: true
};

function Button() {
  const tour = useContext(ShepherdTourContext);

  return (
    <button className={styles.button} onClick={tour.start}>
      Start Tour
    </button>
  );
}

export default function Tour() {
  return (
    <div>
      <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
        <Button />
      </ShepherdTour>
    </div>
  );
}
