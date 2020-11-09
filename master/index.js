const Queue = require("bee-queue");
const queue = new Queue("example", {
  redis: {
    host: "redis",
  },
  isWorker: false,
});

const app = async () => {
  for (let i = 0; i < 10000; i++) {
    const job = await queue.createJob({ x: 2, y: 3 }).save();
    console.log(`Added job with id : ${job.id}`);
  }
};

app();
