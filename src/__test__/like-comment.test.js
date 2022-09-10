/**
 * @jest-environment jsdom
 */
/* eslint-disable*/
const fetch = require('node-fetch');

describe('Testing like and comment counter', () => {
  it('Test 1: Test Like Counter', async ()  => {
    // Assign => Get old Like Count fetching from the involvement API

    let fectedData = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/likes');
    let jFormat = await fectedData.json();
    let oldLikeCount = jFormat[0].likes;

    // Act => Add a like for item1
    
    const payload = { item_id: `item1` };
    await new Promise((resolve) => {
      resolve(
        fetch(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/likes',
          {
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            method: 'POST',
            body: JSON.stringify(payload),
          },
        )
      );
    });

    // Assert => recieved - new like count
    //           expected - old like count

    fectedData = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/likes');
    jFormat = await fectedData.json();
    const newLikeCount = jFormat[0].likes;
    expect(oldLikeCount).toBe(newLikeCount - 1);

  }, 30000);
  it('Test 2: Test Comment Counter', async ()  => {
    // Assign => Get old comment Count fetching from the involvement API

    let fectedData = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/comments?item_id=item1`);
    let jFormat = await fectedData.json();
    const oldCommentCount = jFormat.length;

    // Act => Add a commment for item1
    
    const payload = {
      item_id: `item1`,
      username: 'TEST2',
      comment: 'TESTING2',
    };
    await new Promise((resolve) => {
      resolve(
        fetch(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/comments',
          {
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            method: 'POST',
            body: JSON.stringify(payload),
          },
        )
      );
    });

    // Assert => recieved - new comment count
    //           expected - old comment count
    
    fectedData = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/comments?item_id=item1`);
    jFormat = await fectedData.json();    
    const newCommentCount = jFormat.length;
    expect(oldCommentCount).toBe(newCommentCount - 1);

  }, 30000);
});