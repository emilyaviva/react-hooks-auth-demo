import React from 'react';
import './App.css';

import DuAuthMich from './context'
import LoginForm from './LoginForm'
import Auth from './Auth'

function App() {
  return (
    <DuAuthMich>
      <div className="App">
        <LoginForm />
        <hr />
        <Auth>
          <p>This will always render (when logged in)</p>
        </Auth>
        <Auth permission="read">
          <p>This will only render if you can read.</p>
        </Auth>
        <Auth permission="update">
          <p>This will only render if you can update.</p>
        </Auth>
      </div>
    </DuAuthMich>
  );
}

export default App;
