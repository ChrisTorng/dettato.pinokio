module.exports = {
  daemon: true,
  requires: { bundle: "ai" },
  run: [
    {
      method: "shell.run",
      params: {
        path: ".",
        message: "node manager.js start",
        on: [
          {
            event: "/Uvicorn running on (http:\\/\\/127\\.0\\.0\\.1:\\d+)/",
            done: true
          }
        ]
      }
    },
    {
      method: "local.set",
      params: { url: "{{input.event[1]}}" }
    }
  ]
};
