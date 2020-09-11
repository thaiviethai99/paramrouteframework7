import React, { Component } from 'react';
import { Page, Navbar, Link, Block } from 'framework7-react';
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Page>
        <Navbar title="Param" backLink="Back"  />
        <Block>
            Param id : {this.props.f7route.params.id}
        </Block>
        <Block>
            Param title : {this.props.f7route.params.title}
        </Block>
      </Page>
    )
  }

}

export default About;

