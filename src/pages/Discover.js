import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Discover/About'
import Section from '../components/General/Section'
import Quotes from '../components/Discover/Quotes'
import Product from '../components/Discover/Product'
import UnstoppableOranizations from '../components/Discover/UnstoppableOranizations'
import Hero from '../components/Discover/Hero'
import BlogPost from '../components/Discover/BlogPost'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Discover = () => (
  <Page path="/discover">
    <Hero/>
    <About/>
    <Product/>
    <UnstoppableOranizations/>
    <BlogPost/>
  </Page>
)

export default Discover
