import { PropsWithChildren } from 'react';

import Header from './Header';

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div>
      <Header />

      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
