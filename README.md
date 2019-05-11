# yahoo-weather-api-proxy

🚀🌦 Yahoo weather API proxy ready to deploy on Δ Now

## Why?

Since **Jan 3, 2019** the use of Yahoo weather API throug YQL has been dismissed and therefore you cannot have an app that directly calls an open API for getting weather data.

Now you need to directly retrive the data from your back end using secret API keys you can receive [here](https://developer.yahoo.com/apps/create/).

On this repository you will find a ready-to-deploy [Δ Now](https://zeit.co/now) server that can replace your back end in proxying your app's API calls.

## Setup

Clone this repository

```
git clone https://github.com/crcarlo/yahoo-weather-api-proxy
cd yahoo-weather-api-proxy
```

Add your Yahoo API credentials by typing

```
now secret add yahoo-app-id <your-api-key>
now secret add yahoo-consumer-key <your-consumer-key>
now secret add yahoo-consumer-secret <your-consumer-secret>
```

Change the access control policy in the `now.json` file allowing your app's domain for avoiding use from other origins.

```js
{
  ...
  "routes": [
    {
      "headers": {
        "Access-Control-Allow-Origin": "http://localhost:3000", // change to yourdomain.com
        ...
      }
    }
  ]
}

```

And deploy

```
now
```

# Use

Now you can access Yahoo weather API through your `now.sh` instance like so

```
https://your-instance.now.sh/forecastrss?latitude=45.6481607&longitude=12.340719&format=json
```

You can find the API documentation [here](https://developer.yahoo.com/weather/documentation.html). 
