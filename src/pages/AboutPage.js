import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return  <main>
            <PageHero title='about'/>
            <Wrapper className='page section section-center'>
              <img src={aboutImg} alt='nice desk' />
              <article>
                <div className='title'>
                  <h2>our story</h2>
                  <div className='underline'></div>
                </div>
                <p>
                I'm baby chicharrones cray mustache polaroid pork belly gentrify. Yuccie put a bird on it fingerstache, taxidermy drinking vinegar church-key hot chicken listicle keytar fanny pack. Enamel pin raw denim ugh ennui tacos hammock. Letterpress freegan DIY, mumblecore bespoke tumeric cold-pressed. Disrupt you probably haven't heard of them pop-up, DSA tumeric leggings pug cardigan echo park everyday carry green juice hella try-hard. Crucifix quinoa vexillologist, fixie DIY wolf try-hard yr copper mug beard biodiesel scenester.
                </p>
              </article>
            </Wrapper>
          </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
