# mstdn-entities
[![Build Status](https://travis-ci.org/onsen-ui/mstdn-entities.svg?branch=master)](https://travis-ci.org/onsen-ui/mstdn-entities)
[![Coverage Status](https://coveralls.io/repos/github/onsen-ui/mstdn-entities/badge.svg?branch=master)](https://coveralls.io/github/onsen-ui/mstdn-entities?branch=master)

This library provides Mastodon Entities Class (e.g. Account, Status) and API in order to generate them.

## Note
This library uses **Decorators** and **Reflection-API** (polyfill), so transpiling is highly recommended, but Babel is untested :(  
Currently, **Typescript is recommended**.

# Install and Usage of Presets
`$ npm install -S mstdn-entities` will be available some time soon

The presets of Mastodon Entities Class are avalable.

```
import { Account } from 'mstdn-entities'
YOUR_HTTP_CLIENT.get('/api/v1/accounts/verify_credentials') // as Promise<Object>
  .then((data: Object) => {
    const account = new Account(data) // Type-safe
  })
```

All propertyNames are **converted from snake_case to camelCase**.

```
const plainObj = {
  display_name: 'name'
}

const account = new Account(plainObj)
console.log(account.displayName) // === "name"
console.log(account.display_name) // === undefined

/*
  Account {
    displayName: 'name' // converted to camelCase automatically
  }
*/

const plainAccountObj = account.toJSON()
/*
  {
    display_name: 'name' // return the original in this case
  }
*/
```

"created_at" property, its ISOString will be converted to Date object.

If you use your own Date API (e.g. moment), you can create your custom class. (explained later)

```
const plainObj = {
  created_at: '2011-10-05T14:48:00.000Z'
}

const account = new Account(plainObj)

/*
  Account {
    createdAt: new Date('2011-10-05T14:48:00.000Z') // converted to Date object automatically
  }
*/

const plainAccountObj = account.toJSON()
/*
  {
    created_at: '2011-10-05T14:48:00.000Z' // using Date#toJSON() method
  }
*/
```

## List of Presets
- Account
- Application (untested)
- Attachment (untested)
- Card (untested)
- Context (untested)
- Emoji (untested)
- Instance (untested)
- List (untested)
- MastodonError (untested)
- Mention (untested)
- Notification (untested)
- Relationship (untested)
- Report (untested)
- Results (untested)
- Status (untested)
- Tag

are available.
I will test all the above some time.

MastodonError is just an object. (not built-in Error)

# Mastodon Entities API
You can create your own custom class.

You **should decorate all properties**.

```
import * as moment from 'moment'
import { Entity, convert, param } from 'mstdn-entities'
class CustomAccount extends Entity {
  @param id: number
  @param username: string
  @convert(value => moment(value)) createdAt: any
  /*
    ...
  */
}
```

or babel user, (untested)

```
import moment from 'moment'
import { Entity, convert, is, param } from 'mstdn-entities'
class CustomAccount extends Entity {
  @is(Number) id
  @param username
  @convert(value => moment(value)) createdAt
  /*
    ...
  */
}
```

## Decorators
### convert
arg[0]: callback
return: PropertyDecorator

@is, @are and @param decorators are all syntax-sugar of @convert.

### is
arg[0]: Function (e.g. String, Number, UserDefinedClass)
return: PropertyDecorator

If your property type is Date, **use @is(Date) decorator explicitly**.

### are
arg[0]: Function
return: PropertyDecorator

If your property type is Array, **use @are(Function) decorator explicitly**.

If string[], then use @are(String).

If Account[], then use @are(Account).

### param
This is a property decorator itself.

If your property is Number, String, Boolean, Object, or YourOwnClass, you do not have to use @is.
(JSON.parse will work properly.)

If your property is Array, use @are decorator.

If your property is Date or JSON.parse will not work, use @is decorator.
