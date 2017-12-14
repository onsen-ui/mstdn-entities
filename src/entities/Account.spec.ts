import { Account } from './Account'
const json = `{
  "id": "1",
  "username": "test",
  "acct": "test",
  "display_name": "",
  "locked": true,
  "created_at": "2017-12-01T12:00:30.000Z",
  "note": "<p>note</p>",
  "url": "https://mstdn.jp/@test",
  "avatar": "https://mstdn.jp/avatars/original/missing.png",
  "avatar_static": "https://mstdn.jp/avatars/original/missing.png",
  "header": "https://mstdn.jp/headers/original/missing.png",
  "header_static": "https://mstdn.jp/headers/original/missing.png",
  "followers_count": 10,
  "following_count": 20,
  "statuses_count": 30,
  "source": {
    "privacy": "private",
    "sensitive": false,
    "note": "note"
  }
}`

const obj = JSON.parse(json)
const account = new Account(obj)

test('Account should be parsed properly', () => {
  expect(account).toMatchObject({
    id: '1',
    username: 'test',
    acct: 'test',
    displayName: '',
    locked: true,
    createdAt: new Date('2017-12-01T12:00:30.000Z'),
    note: '<p>note</p>',
    url: 'https://mstdn.jp/@test',
    avatar: 'https://mstdn.jp/avatars/original/missing.png',
    avatarStatic: 'https://mstdn.jp/avatars/original/missing.png',
    header: 'https://mstdn.jp/headers/original/missing.png',
    headerStatic: 'https://mstdn.jp/headers/original/missing.png',
    followersCount: 10,
    followingCount: 20,
    statusesCount: 30,
    source: {
      privacy: 'private',
      sensitive: false,
      note: 'note'
    }
  })
})

test('Account should be stringified as JSON properly', () => {
  expect(JSON.stringify(account, null, '  ')).toBe(json)
})
