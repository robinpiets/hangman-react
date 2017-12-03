export const GUESS = 'GUESS'

export default (newGuess) => {
  // console.log('2: newGuess:',newGuess);
  return {
    type: GUESS,
    payload: newGuess
  }
}
