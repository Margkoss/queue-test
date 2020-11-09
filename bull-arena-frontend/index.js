const Arena = require("bull-arena");

// Mandatory import of queue library.
const Bee = require("bee-queue");

Arena({
  // All queue libraries used must be explicitly imported and included.
  Bee,
  queues: [
    {
      // Required for each queue definition.
      name: "example",

      // User-readable display name for the host. Required.
      hostId: "Queue Server 1",

      redis: {
        host: "redis",
      },

      // Queue type (Bull or Bee - default Bull).
      type: "bee",
    },
  ],
});
