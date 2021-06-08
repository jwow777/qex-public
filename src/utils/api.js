/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable import/prefer-default-export */
const BASE_URL = 'https://qex.team';

const twoNumber = (num) => (num < 10 ? `0${num}` : num);
const handleDate = (date) => {
  const timezone = (num) => (num < 0 ? num : `+${num}`);
  return `${twoNumber(date.getDate())}.${twoNumber(date.getMonth() + 1)}.${date.getFullYear()} ${twoNumber(date.getHours())}:${twoNumber(date.getMinutes())} UTC: ${timezone(date.getTimezoneOffset() / -60)}`;
};

const handleChosenDate = (date) => {
  const differenceTime = (num) => {
    const timezoneClient = date.getTimezoneOffset() / -60;
    return num + timezoneClient * (-1) + 3;
  };
  let day = date.getDate();
  let hours = differenceTime(date.getHours());
  if (hours > 23) {
    day += 1;
    hours -= 24;
  } else if (hours < 0) {
    day -= 1;
    hours += 24;
  }
  return `${twoNumber(day)}.${twoNumber(date.getMonth() + 1)}.${date.getFullYear()} ${twoNumber(hours)}:${twoNumber(date.getMinutes())}`;
};

export const formApi = (state, formId) => fetch(`${BASE_URL}/connector.php`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    action: 'app_form',
    body: {
      form_id: formId,
      communication: state.communication,
      phone: state.phone,
      country: state.country,
      dialCode: state.dialCode,
      email: state.email,
      firstName: state.firstName,
      company: state.company,
      task: state.task,
      localDate: handleDate(state.localDate),
      chosenDate: JSON.stringify(state.verificationDate) === JSON.stringify(state.date) ? 'Не выбрана дата' : handleChosenDate(state.date),
      policy: state.policy,
    },
  }),
})
  .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
  .catch((err) => console.log(err));
