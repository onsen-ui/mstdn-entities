import * as Entities from './'

describe('Entity API', () => {
  test('module contains Entity', () => {
    expect(Entities.Entity).toBeDefined()
  })
  test('module contains convert', () => {
    expect(Entities.convert).toBeDefined()
  })
  test('module contains param', () => {
    expect(Entities.param).toBeDefined()
  })
  test('module contains are', () => {
    expect(Entities.are).toBeDefined()
  })
  test('module contains is', () => {
    expect(Entities.is).toBeDefined()
  })
})

describe('Preset Class', () => {
  test('module contains Account', () => {
    expect(Entities.Account).toBeDefined()
  })
  test('module contains Application', () => {
    expect(Entities.Application).toBeDefined()
  })
  test('module contains Attachment', () => {
    expect(Entities.Attachment).toBeDefined()
  })
  test('module contains Card', () => {
    expect(Entities.Card).toBeDefined()
  })
  test('module contains Context', () => {
    expect(Entities.Context).toBeDefined()
  })
  test('module contains Emoji', () => {
    expect(Entities.Emoji).toBeDefined()
  })
  test('module contains MastodonError', () => {
    expect(Entities.MastodonError).toBeDefined()
  })
  test('module contains Instance', () => {
    expect(Entities.Instance).toBeDefined()
  })
  test('module contains Mention', () => {
    expect(Entities.Mention).toBeDefined()
  })
  test('module contains Notification', () => {
    expect(Entities.Notification).toBeDefined()
  })
  test('module contains Relationship', () => {
    expect(Entities.Relationship).toBeDefined()
  })
  test('module contains Results', () => {
    expect(Entities.Results).toBeDefined()
  })
  test('module contains Status', () => {
    expect(Entities.Status).toBeDefined()
  })
  test('module contains Tag', () => {
    expect(Entities.Tag).toBeDefined()
  })
  test('module contains List', () => {
    expect(Entities.List).toBeDefined()
  })
})
