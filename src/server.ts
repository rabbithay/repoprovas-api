import app, { init } from './app';

const port = process.env.NODE_ENV === 'dev' ? 4002 : process.env.PORT;

init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
