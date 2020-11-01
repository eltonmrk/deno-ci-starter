import {assert} from 'https://deno.land/std/testing/asserts.ts';

Deno.test({
    name: "The mighty test",
    async fn() {
        assert(true);
    }
});