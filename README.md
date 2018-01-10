# vuejs-noty
A Vue JS wrapper around [Noty](http://ned.im/noty/). Developped for Vue 2.

## Getting Started


Install using npm:

```bash
$ npm install vuejs-noty
```

Import and register Vue plugin:

```js
import Vue from 'vue'
import VueNoty from 'vuejs-noty'

Vue.use(VueNoty)
```

#### Import noty styles

Import stylesheet in your vue / js components:

```js
import 'vuejs-noty/dist/vuejs-noty.css'
```

Or, import styles in your less / scss stylesheet:

```less
@import '~vuejs-noty/dist/vuejs-noty.css';
```

## Usage

In your Vue.js components, simply call one of these methods:

```js
// Basic alert
this.$noty.show("Hello world!")

// Success notification
this.$noty.success("Your profile has been saved!")

// Error message
this.$noty.error("Oops, something went wrong!")

// Warning
this.$noty.warning("Please review your information.")

// Basic alert
this.$noty.info("New version of the app is available!")
```

All of these methods will return a Noty object instance, so you can use available [API methods](https://ned.im/noty/#/api).

## Configuration

#### Config defaults

You can set a default configuration object when registering the plugin. Example:

```js
Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: 'topCenter'
})
```

#### Config override
 
All of the alert methods can accept a config object as second parameter if you need to override the defaults. Example:

```js
this.$noty.info("Hey! Something very important here...", {
  killer: true,
  timeout: 6000,
  layout: 'topRight'
})
```

For more information about available configuration properties, please read [Noty's documentation](https://ned.im/noty/#/options).

