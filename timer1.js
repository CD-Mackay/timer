let numbers = process.argv.slice(2);
const alarm = function(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = parseInt(numbers[i]);
    if (!isNaN(numbers[i]) && numbers[i] > 0)
      setTimeout(() => {
        process.stdout.write("BEEP BEEP(sound was not working)!\n");
      }, numbers[i] * 1000);
  }

};
alarm(numbers);