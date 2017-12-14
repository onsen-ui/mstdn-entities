import { Tag } from './Tag'
const json = '{"name":"test","url":"https://mstdn.jp/tags/test"}'
const obj = JSON.parse(json)
const tag = new Tag(obj)

test('Tag should be parsed properly', () => {
  expect(tag).toMatchObject({
    name: 'test',
    url: 'https://mstdn.jp/tags/test'
  })
})

test('Tag should be stringified as JSON properly', () => {
  expect(JSON.stringify(tag)).toBe(json)
})

test('Tag can be changed', () => {
  const tag = new Tag(obj)
  tag.name = 'changed'
  tag.url = 'https://mstdn.io/tags/changed'
  expect(tag).toMatchObject({
    name: 'changed',
    url: 'https://mstdn.io/tags/changed'
  })
})
