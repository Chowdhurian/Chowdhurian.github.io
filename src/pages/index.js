import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Main from '../components/main'
import Outlink from '../components/outlink'

const ListLink = props => (
  <div>
    <Link to={props.to}>
      {props.children}
    </Link>
  </div>
)

const IndexPage = () => (
  <Main>
    <p>
      Developer advocate and software engineer, <Link to="/writing/">writing about finding calm on the web</Link>, creating <Outlink name='products for meatspace' url='https://www.womburtle.com/' />, and building <Link to="/communities/">communities</Link>. ex<Outlink name='-InVision' url='https://www.crunchbase.com/organization/invisionapp' />, <Outlink name='-Edvisor' url='https://www.crunchbase.com/organization/edvisor-io' /> <a target='_blank' rel='noopener noreferrer' href='' target='_blank'></a>, and <Outlink name='-UBC' url='https://www.crunchbase.com/organization/university-of-british-columbia' />. I'm <Link to='/living/'>living</Link> in Vancouver BC 🇨🇦 and <Link to="/resume/">working</Link> with remote/distributed teams.
    </p>
    <Link to="/contact/">Get in touch.</Link>
  </Main>
)

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default IndexPage
