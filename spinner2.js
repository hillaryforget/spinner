const positions = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let time = 0;
for (const position of positions) {
  time += 100;
  setTimeout(() => {
    process.stdout.write(position);
  }, time);
}