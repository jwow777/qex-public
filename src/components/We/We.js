import React from 'react';
import Container from '../Container/Container';
import UlLists from '../UlLists/UlLists';
import Crewman from '../Crewman/Crewman';
import WhoElse from '../Whoelse/Whoelse';
import crewman from '../../utils/crewman';
import whoelse from '../../utils/whoelse';
import './We.css';

function We() {
  const classNameSection = 'we';
  return (
    <Container classNameSection={classNameSection} title='Мы'>
      <UlLists className={`${classNameSection}__list we__list_crew`} dataMap={crewman} Component={Crewman}/>
      {/* <h3 className='we__subtitle'>Кто еще:</h3> */}
      <UlLists className={`${classNameSection}__list we__list_whoelse`} dataMap={whoelse} Component={WhoElse}/>
    </Container>
  );
}

export default We;
