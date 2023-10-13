import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import CertificateManager from './pages/Dashboard/CertificateManager';
import GraduateDashboard from './student/GraduateDashboard';
import Verify from './verify/Verify';

const DefaultLayout = lazy( () => import( './layout/DefaultLayout' ) );

function App() {
  const [loading, setLoading] = useState<boolean>( true );

  useEffect( () => {
    setTimeout( () => setLoading( false ), 1000 );
  }, [] );

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />

      <Routes>
      <Route path="/verify" element={<Verify />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/grad/dashboard" element={<GraduateDashboard />} />
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<CertificateManager />} />
          {routes.map( ( { path, component: Component } ) => (
            <Route
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component sidebarOpen={false} setSidebarOpen={function ( arg: boolean ): void {
                    throw new Error( 'Function not implemented.' );
                  } } />
                </Suspense>
              }
            />
          ) )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
