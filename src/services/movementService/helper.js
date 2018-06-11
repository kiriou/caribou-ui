import moment from 'moment';

export function flattenMovement(movement) {
  movement.frequencyType = movement.frequency.type;
  movement.frequencyPattern = movement.frequency.pattern;
  movement.startPeriod = moment(movement.period.start);
  movement.endPeriod = moment(movement.period.end);
  delete movement.period;
  delete movement.frequency;
  return movement;
}

export function flattenMovementList(list) {
  const result = [];
  list.forEach(movement => result.push(flattenMovement(movement)));
  return result;
}

export function prepareRequestParam(movement) {
  movement.frequency = {
    type: movement.frequencyType,
    pattern: movement.frequencyPattern,
  };
  movement.period = {
    start: moment(movement.startPeriod, 'DD/MM/YYYY').toISOString(),
    end: moment(movement.endPeriod, 'DD/MM/YYYY').toISOString(),
  };
  delete movement.frequencyType;
  delete movement.frequencyPattern;
  delete movement.startPeriod;
  delete movement.endPeriod;
  return movement;
}

export function initMovement(ledgerId) {
  return { _id: null,
    ledgerId,
    name: '',
    description: '',
    owner: '',
    recipients: [],
    amount: 0,
    way: '',
    currency: '',
    category: '',
    frequencyType: 'single',
    frequencyPattern: '',
    startPeriod: moment(),
    endPeriod: null,
    creator: '',
    lastModifier: '',
    creationDate: '',
    modificationDate: '' };
}
