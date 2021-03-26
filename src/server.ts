import app from "./app";
import { Logger } from "./helpers/logger";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  Logger.info(`Server listening on port: ${port}`);
});
