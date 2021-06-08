import React from 'react';
import { Breadcrumbs } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import Container from '../Container/Container';
import UlLists from '../UlLists/UlLists';
import direction from '../../utils/direction';
import Direction from '../Direction/Direction';
import stage from '../../utils/stage';
import Stage from '../Stage/Stage';
import './Services.css';

function Services() {
  const classNameSection = 'services';
  return (
    <Container classNameSection='services' title='Услуги'>
      <div>
        <h3 className='subtitle services__subtitle'>Направления:</h3>
        <UlLists className={`${classNameSection}__list services__list_direction`} dataMap={direction} Component={Direction}/>
      </div>
      <div>
        <h3 className='subtitle services__subtitle'>Этапы:</h3>
        <Breadcrumbs separator={<NavigateNext fontSize="large"/>} className='services__list services__list_stage'>
          {stage.map((item, index) => (
            <Stage data={item} key={index} />
          ))}
        </Breadcrumbs>
      </div>
    </Container>
  );
}

export default Services;
