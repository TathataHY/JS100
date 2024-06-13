import {
    MLCEngine,
    MLCEngineWorkerHandler,
} from "https://esm.run/@mlc-ai/web-llm";

const engine = new MLCEngine();
const handler = new MLCEngineWorkerHandler(engine);

onmessage = (event) => {
  handler.onmessage(event);
};
