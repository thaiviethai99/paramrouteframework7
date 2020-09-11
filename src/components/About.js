import React, { Component } from 'react';
import { Page, Navbar, Link, Block } from 'framework7-react';
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Page>
        <Navbar title="About" backLink="Back"  />
        <Block>
            About page
        </Block>
      </Page>
    )
  }

}

export default About;

