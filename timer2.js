const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  } else if (key === "b") {
    process.stdout.write("BEEP BEEP!\n");
  } else {
  key = Number(key); 
  } if (!isNaN(key)) {
  console.log(`Setting timer for ${key} seconds`);
    setTimeout(() => {
      console.log("BEEP BEEP");
    }, key * 1000);
  }
});