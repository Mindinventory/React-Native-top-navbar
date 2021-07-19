# React Native top-navbar

A **@mindinventory/rn-top-navbar** package is use to create custom navigation for react native apps. 
user can fully customize navbar. you can change the background color of statusbar. Navigation can contain component like icon, image, text.

![alt navbar](https://github.com/Mindinventory/rn-top-navbar/blob/master/doc/navbar.png?raw=true)
![alt navbar](https://github.com/Mindinventory/rn-top-navbar/blob/master/doc/navbar_1.png?raw=true)
![alt navbar](https://github.com/Mindinventory/rn-top-navbar/blob/master/doc/navbar_2.png?raw=true)
![alt navbar](https://github.com/Mindinventory/rn-top-navbar/blob/master/doc/navbar_3.png?raw=true)
![alt navbar](https://github.com/Mindinventory/rn-top-navbar/blob/master/doc/navbar_4.png?raw=true)

### Installation

using npm:

```
npm install @mindinventory/rn-top-navbar
```

using yarn:

```
yarn add @mindinventory/rn-top-navbar
```

### Supported platform
  * Android
  * Ios
    
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
