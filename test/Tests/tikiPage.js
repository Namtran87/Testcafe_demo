import { Selector } from 'testcafe';

fixture`TestCafe`
    .page('http://www.google.com/');

test('Close a specific window', async t => {
    const window1 = await t.openWindow('http://devexpress.com');

});