# LiveAPI

Fetch the current wait status at a location and see how busy or not busy they are.

```bash
$ curl --request GET \
  --url http://10.0.2.3:3002/ \
  --header 'Content-Type: application/json' \
  --data '{
	"query": "statue+of+liberty"
}'

# Example JSON response
{
  "query": "statue+of+liberty",
  "text": "Not too busy",
  "values": {
    "expected_to_full": "74%",
    "actual_full": "49%"
  }
}
```

## Installation
How to install via js or see docker below
```bash
git clone https://github.com/gjrdiesel/liveapi.git
cd liveapi
npm install && npm start
```

### Pull down from dockerhub
```
docker pull gjrdiesel/liveapi
docker run -d --name=liveapi -p 3002:3000 gjrdiesel/liveapi
```

## How to build/deploy (Docker)
```bash
docker build -t gjrdiesel/liveapi .
docker run -it --rm --name=liveapi -d -p 3002:3000 gjrdiesel/liveapi
```