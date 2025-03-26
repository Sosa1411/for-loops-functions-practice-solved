// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBalance = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].deposits && array[i].withdrawals) {
      let depositSum = 0;
      for (let x = 0; x < array[i].deposits.length; x++) {
        depositSum += array[i].deposits[x];
      }
      let withdrawalSum = 0;
      for (let n = 0; n < array[i].withdrawals.length; n++) {
        withdrawalSum += array[i].withdrawals[n];
      }
      if (depositSum - withdrawalSum !== array[i].balance) {
        wrongBalance.push(array[i]);
      }
    }
  }
  console.log(wrongBalance);

  return wrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
