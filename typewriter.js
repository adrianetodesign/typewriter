const sentence = "This is the water, and this is the well...drink deep, and descend.";
let initialTime = 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, initialTime += 50);
};

setTimeout(() => {
  process.stdout.write('\n');
}, initialTime += 50);