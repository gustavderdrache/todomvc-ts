import * as React from 'react';

import Header from './Header';
import ConnectedMain from './ConnectedMain';
import Footer from './Footer';

export default function App(): JSX.Element {
  return (
    <section className="todoapp">
      <Header />
      <ConnectedMain />
      <Footer />
    </section>
  );
}