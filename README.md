# yahoo-weather-api-proxy

> ⚠🚧 WARNING: WORK IN PROGRESS ⚠🚧

Since **Jan 3, 2019** Yahoo weather APIs require an API key and a secret API consumer key.

On this repository you will find a ready-to-deploy [Now](https://zeit.co/now) lambda Node server.

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

And deploy

```
now
```

# Use

Now you can access Yahoo weather API through your `now.sh` instance

**Example**
```
<your-now.sh-instance>/forecastrss?location=sunnyvale,ca&format=json
```