import React from 'react';
import Container from '../Container/Container';
import UlLists from '../UlLists/UlLists';
import WhymeTheses from '../WhymeTheses/WhymeTheses';
import whyme from '../../utils/whyme';
import './Whyme.css';

function Whyme() {
  const classNameSection = 'whyme';
  return (
    <Container classNameSection={classNameSection} title='Почему мы лучшие'>
      <UlLists className={`${classNameSection}__list`} dataMap={whyme} Component={WhymeTheses}/>
    </Container>
  );
}

export default Whyme;
