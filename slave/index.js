const Queue = require("bee-queue");
const queue = new Queue("example", {
  redis: {
    host: "redis",
  },
  isWorker: true,
});

queue.process(async (job) => {
  console.log(`Processing job ${job.id}`);
  return await new Promise((res, rej) => {
    setTimeout(() => {
      const chance = Math.floor(Math.random() * 10);

      if (chance <= 5) {
        res(job.data.x + job.data.y);
      } else {
        rej("Random chance it would fail");
      }
    }, 3000);
  });
});
