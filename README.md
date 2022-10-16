# Promisify Wait

Promisify wait is a simple function to await timeout

## Installation

To use promisify-wait in your project, using npm:

```bash
npm install promisify-wait
```

or using yarn:

```bash
yarn add promisify-wait
```

## Usage

```javascript
import wait, { DURATION_UNIT } from "promisify-wait";

# wait 1000 milliseconds
await wait(1000) #Default in millisecond

# wait 10 seconds
await wait(10, DURATION_UNIT.SECOND)

# wait 1 minute 
await wait(1, DURATION_UNIT.MINUTE)

# wait 1 hour
await wait(1, DURATION_UNIT.HOUR)

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/SanYann/wait-js/blob/main/LICENSE)