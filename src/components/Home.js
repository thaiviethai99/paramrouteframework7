import React, { Component } from 'react';
import { Page, Navbar, Link, Block } from 'framework7-react';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Page>
        <Navbar title="Home Page" />
        <Block>
          <Link href="/param/1/reactjs">Pass prop</Link>
        </Block>
        <Block>
          <Link href="/about/">About Page</Link>
        </Block>
      </Page>
    )
  }

}

export default Home;

