# Login Chrome Extension

![Extension Logo](logo.png)

## Overview

The Login Chrome Extension provides a seamless login experience for specified web portals. It automatically populates login credentials and facilitates a smooth login process.

## Features

- Automatic login for specified websites.
- Credential storage for quick access.
- Customizable options for user preferences.

## Installation

1. Clone the repository or download the ZIP file.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right.
4. Click on "Load unpacked" and select the folder where your extension files are located.
5. Your extension should now be installed and active.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. Enter your username and password in the popup.
3. Click "Save" to store the credentials for future use.
4. The extension will automatically handle the login process for supported websites.

## Configuration

The extension can be configured by modifying the `manifest.json` file. Key configurations include:

- **Matches**: URLs for which the content script (`index.js`) should be injected.
- **Permissions**: Required permissions for the extension.

## Contributing
Contributions to this project are welcome. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

## Credits
Author: **Rohit Yadav**
Contact: **rohityadav.se@gmail.com**
