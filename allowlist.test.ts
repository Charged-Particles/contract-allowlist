import { test } from '@jest/globals';
// import { allowlist } from "./dist/allowlist";
import { allowlist } from './src/allowlist';

test('It outputs the allow listed', ()=> {
  console.log(allowlist);
});

