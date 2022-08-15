import React from 'react';

import './style.scss';

const RegistrationLogin = React.lazy(() => import('./RegistrationLogin'));
const RegistrationForm = React.lazy(() => import('./RegistrationForm'));

const Registration: React.FC = () => {
  return (
    <div className="registration">
      <RegistrationLogin />
      <RegistrationForm />
    </div>
  );
};

export default Registration;
