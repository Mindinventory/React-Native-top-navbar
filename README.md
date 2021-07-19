# React Native top-navbar

A **@mindinventory/rn-top-navbar**  is a user interface component for react native apps, it's supported in ios and android both platform,
user can fully customize navbar, **@mindinventory/rn-top-navbar** provides change in background color of statusbar of **ios** and **Android**,
it's contains like icon, image, text.

![alt navbar](https://github.com/Mindinventory/rn-top-navbar/blob/master/dock/navbar.png?raw=true)

### Installation

using npm:

```
npm install @mindinventory/rn-top-navbar
```

using yarn:

```
yarn add @mindinventory/rn-top-navbar
```

### Usage

```js
import Header from '@mindinventory/rn-top-navbar';
...
<Header style={{ backgroundColor: '#009999' }} statusBarBackground='#008080' barStyle='light-content'>
    <Header.Left style={{ backgroundColor: '#009999', width: "15%" }}>
        <Icon name='arrow-left' style={{color: '#fff', fontSize: 18}} />
    </Header.Left>
    <Header.Body style={{ backgroundColor: '#009999', width: "70%" }}>
        <Text style={{color: '#fff'}}>Header Title</Text>
    </Header.Body>
    <Header.Right style={{ backgroundColor: '#009999', flexDirection: 'row', width: '15%' }}>
        <Icon name='bars' style={{color: '#fff', fontSize: 18}} />
    </Header.Right>
</Header>
```

### Documentation

**Navbar container props**
| Prop | Type | description |
| --- | --- | --- |
| statusBarBackground | string | use for change background color of status bar. |
| barStyle | string | use for change content of status bar. |
| style | style | apply styles on navbar container. |

**Left container props**
| Prop | Type | description |
| --- | --- | --- |
| style | style | apply styles on left container. |

**Body container props**
| Prop | Type | description |
| --- | --- | --- |
| style | style | apply styles on body container. |

**Right container props**
| Prop | Type | description |
| --- | --- | --- |
| style | style | apply styles on right container. |


### Changelog
**Version: 0.0.1**
  * Initial Build

### LICENSE!

@mindinventory/rn-top-navbar is [MIT-licensed](https://github.com/Mindinventory/rn-top-navbar/blob/master/LICENSE).

### Let us know!

We’d be really happy if you send us links to your projects where you use our component. Just send an email to sales@mindinventory.com And do let us know if you have any questions or suggestion regarding our work.
