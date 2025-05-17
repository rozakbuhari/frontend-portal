import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

// Using the correct path that matches how the modules are exposed in the module federation config
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Kyc = React.lazy(() => import('kyc/App'));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Kyb = React.lazy(() => import('kyb/App'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/kyc">Kyc</Link>
        </li>
        <li>
          <Link to="/kyb">Kyb</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="root" />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/kyb" element={<Kyb />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
