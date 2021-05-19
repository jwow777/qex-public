import React from 'react';
import './Whyme.css';
import process from '../../images/whyme/process.png';
import interfaceUX from '../../images/whyme/interface.png';
import soft from '../../images/whyme/soft.png';
import garant from '../../images/whyme/garant.png';

function Whyme() {
  return (
    <section className='whyme'>
      <div className='whyme__container'>
        <h2 className='title whyme__title'>Почему мы лучшие</h2>
        <ul className='list whyme__list'>
          <li className='whyme__item'>
            <img
              src={process}
              alt='Эффективность бизнес-процесса'
              className='whyme__item-image whyme__item-image_first'
            />
            <h3 className='whyme__item-title'>Эффективность бизнес-процесса</h3>
            <p className='whyme__item-description'>
              Нам важно,{' '}
              <span className='whyme__item-description_bold'>
                какой результат принесут наши решения
              </span>{' '}
              и как они повлияют на процессы в компании. В основном, конечно,
              ориентируемся на цифры - время работы сотрудников, время
              выполнения процесса, трансакционные издержки и так далее.
            </p>
            <p className='whyme__item-description'>
              Иногда решаем сложные философские вопросы по логике разработки и
              поведения пользователя - их помогает решать наша внутренняя
              политика компании, ориентированная на результаты.
            </p>
          </li>
          <li className='whyme__item'>
            <img
              src={interfaceUX}
              alt='Интерфейс (UX\UI)'
              className='whyme__item-image whyme__item-image_second'
            />
            <h3 className='whyme__item-title'>Интерфейс (UX\UI)</h3>
            <p className='whyme__item-description'>
              Мы знаем, кто конечный пользователь наших решений и ответственно
              подходим к проектировке. Удобный, интуитивный интерфейс нужен не
              просто для красоты -
              <span className='whyme__item-description_bold'>
                он экономит много операционного времени
              </span>
              вашей команде и убирает необходимость длительного обучения.
            </p>
          </li>
          <li className='whyme__item'>
            <img
              src={soft}
              alt='Возможность поддержки софта другими разработчиками'
              className='whyme__item-image'
            />
            <h3 className='whyme__item-title whyme__item-title_small'>
              Возможность поддержки софта другими разработчиками
            </h3>
            <p className='whyme__item-description whyme__item-description_small'>
              Мы выбираем популярный стек разработки и всегда пишем{' '}
              <span className='whyme__item-description_bold'>
                документацию всего проекта.
              </span>
              Наши решения можем развивать и поддерживать мы, а может и другая
              команда.
            </p>
          </li>
          <li className='whyme__item'>
            <img
              src={garant}
              alt='За все 3 года работы компании 100% проектов доведено до конца'
              className='whyme__item-image'
            />
            <h3 className='whyme__item-title whyme__item-title_small'>
              За все 3 года работы компании 100% проектов доведено до конца
            </h3>
            <p className='whyme__item-description whyme__item-description_small'>
              Пока не было ни одной задачи, которую не получалось решить. Это
              одна из основ
              <span className='whyme__item-description_bold'>
                нашей философии.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Whyme;
