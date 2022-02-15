'use strict';

// In order for this theme to work straight out of the box with the Create React App project,
// we follow the same CSS Modules `[name].module.css` file naming convention.
var css = require('./lib/styles.module.css');

// media breakpoint - small screen min width
var smallScreenMin = 768;

// default className for NotificationsSystem component
var notificationsSystemClassName = 'notifications-system';

// default className for NotificationsContainer component
var notificationsContainerClassName = {
  main: 'notifications-container',
  position: function position(_position) {
    return 'notifications-container--' + _position;
  }
};

// default transition for Notification component
var notificationsContainerTransition = {
  enterTimeout: 500,
  leaveTimeout: 900,
  name: {
    enter: 'notification-wrapper-enter',
    leave: 'notification-wrapper-leave'
  }
};

// default className for Notification component
var notificationClassName = {
  main: 'notification',
  wrapper: 'notification-wrapper',
  meta: 'notification-meta',
  title: 'notification-title',
  message: 'notification-message',
  // `fa` corresponds to font-awesome's class name
  icon: 'fa ' + 'notification-icon',
  imageContainer: 'notification-image-container',
  image: 'notification-image',
  status: function status(_status) {
    return 'notification--' + _status;
  },
  dismissible: 'notification--dismissible',
  buttons: function buttons(count) {
    if (count === 0) {
      return '';
    } else if (count === 1) {
      return 'notification--buttons-1';
    } else if (count === 2) {
      return 'notification--buttons-2';
    }
    return 'notification-buttons';
  },
  closeButtonContainer: 'notification-close-button-container',
  closeButton: 'fa ' + 'notification-close-button',
  button: 'notification-button',
  buttonText: 'notification-button-text'
};

module.exports = {
  smallScreenMin: smallScreenMin,
  notificationsSystem: {
    className: notificationsSystemClassName
  },
  notificationsContainer: {
    className: notificationsContainerClassName,
    transition: notificationsContainerTransition
  },
  notification: {
    className: notificationClassName
  }
};
