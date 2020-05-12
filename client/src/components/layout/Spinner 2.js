import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
    <p
      className='large'
      style={{ width: '500px', margin: 'auto', display: 'block' }}
    >
      If loading takes too much time,refresh the page please
    </p>
  </Fragment>
);