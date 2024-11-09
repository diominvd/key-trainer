# A brief guide about launching key-trainer locally on your device

First, copy this repository to your device and go to it directory.

```
git clone https://github.com/diominvd/key-trainer.git

cd key-trainer/
```

Next, you have two options to run the app locally on your device:

**1. Without using Docker**

```
npm install

npm run dev
```

**2. With Docker**

```
docker-compose up --build
```

After completing the execution of any of the options, go to `http://localhost:5173/` in your browser and start training.
