import shortid from 'shortid';
import { ADD_TALENT, UPDATE_TALENT, DELETE_TALENT, SELECT_TALENTS, SELECT_ROGUE_TALENTS, SELECT_KINDRED, REROLL_DICE,
  UPDATE_AGE, UPDATE_HAIR, UPDATE_NAME, SELECT_GENDER, SELECT_CLASS, UPDATE_BASE64_PORTRAIT } from '../constants/ActionTypes';

export const addTalent = (text, isRogue) => {
  return {
    type: ADD_TALENT,
    name: text,
    id: shortid.generate(),
    isRogue: isRogue
  }
}

export const deleteTalent = (id) => {
  return {
    type: DELETE_TALENT,
    id: id
  }
}

export const updateTalent = (id, text, isRogue) => {
  return {
    type: UPDATE_TALENT,
    id: id,
    name: text,
    isRogue
  }
}

export const selectKindred = (id) => {
 return {
  type: SELECT_KINDRED,
  id: id
 };
}

export const selectTalents = (payload) => {
 return {
  type: SELECT_TALENTS,
  payload: payload
 };
}

export const selectRogueTalents = (payload) => {
 return {
  type: SELECT_ROGUE_TALENTS,
  payload: payload
 };
}

export const selectClass = (c) => {
 return {
  type: SELECT_CLASS,
  class: c
 };
}

export const updateName = (name) => {
 return {
  type: UPDATE_NAME,
  name: name
 };
}
export const updateBase64Portrait = (p) => {
 return {
  type: UPDATE_BASE64_PORTRAIT,
  base64Portrait: p
 };
}
export const updateAge = (age) => {
 return {
  type: UPDATE_AGE,
  age: age
 };
}
export const updateHair = (hair) => {
 return {
  type: UPDATE_HAIR,
  hair: hair
 };
}

export const selectGender = (gender) => {
 return {
  type: SELECT_GENDER,
  gender: gender
 };
}
const rollOneDice = () => {
  return Math.ceil(Math.random() * 6);
}

const getMultipleDice = (numberofdice, taro) => {
    var dicearray = [];
    var i = 0;
    while(i < numberofdice){
      dicearray.push(rollOneDice());
      i += 1;
    }
    if (taro){
      var firstvalue = dicearray[0];
      var issame = true;
      for(var x = 1; x < numberofdice; x++){
        if(firstvalue !== dicearray[x]){
          issame = false;
        }
      }
      if(issame){
        dicearray = dicearray.concat(getMultipleDice(numberofdice,true));
      }
    }
    return dicearray;
}

export const rerollDice = () => {
 return {
  type: REROLL_DICE,
  attributes :  {
   str : getMultipleDice(3,true),
   con : getMultipleDice(3,true),
   dex : getMultipleDice(3,true),
   spd : getMultipleDice(3,true),
   lk : getMultipleDice(3,true),
   iq : getMultipleDice(3,true),
   wiz : getMultipleDice(3,true),
   chr : getMultipleDice(3,true)
  },
  height : getMultipleDice(3,false).reduce((p,c) => p+c),
  weight : getMultipleDice(3,false).reduce((p,c) => p+c),
  gold : getMultipleDice(3,false).reduce((p,c) => p+c) * 10

 };
}
