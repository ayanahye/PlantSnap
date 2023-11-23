import '@testing-library/jest-dom/extend-expect'
import {TextEncoder, TextDecoder} from 'util';
import 'isomorphic-fetch'


Object.assign(global, {TextDecoder, TextEncoder});
const originalWarn = console.error;
console.error = (msg) =>
    !msg.toString().includes('Invalid value for prop %s on <%s> tag') &&
    !msg.includes("An update to %s inside a test was not wrapped in act(...)") &&
    originalWarn(msg);