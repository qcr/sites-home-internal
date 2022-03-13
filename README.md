# QCR's internal home page

[![QUT Centre for Robotics Open Source](https://github.com/qcr/qcr.github.io/raw/master/misc/badge.svg)](https://qcr.github.io)

This repository contains the resources that build our [internal home page](https://home.qcr.ai).

TODO get access to setup CNAME for home subdomain

## Changing the contents of the page

All contents are served from the data contained in the [`./data/home.yaml`](./data/home.yaml) file. Editing this file, and pushing on the master branch, will a trigger a [GitHub Action](https://github.com/qcr/sites-home-internal/actions) to update the site.

The site data YAML file has two top-level keys, `features` and `links`, which are lists of data. These lists populate the feature boxes and useful links sections respectively. The sections below describe what keys are supported in those lists.

### `features`

| Key      | Required | Types     | Notes                                    |
| -------- | -------- | -------- | ---------------------------------------- | 
| `name`   | Yes      | `string` | Text shown on the feature card.          |
| `target` | Yes      | `string` | Go to this URL when the card is clicked. |
| `media`  | No       | `string` `string[]` | Media to underlay in the feature card. Supports images and videos. String must be either a string pointing to a file in the `./public/` directory (i.e. `/image.jpg` will use the file at `./public/image.jpg`), or a URL pointing to an image. An array of strings can be provided to improve compatibility across browsers and devices. |

### `links`

| Key      | Required | Types    | Notes                                    |
| -------- | -------- | -------- | ---------------------------------------- |
| `name`   | Yes      | `string` | Text shown for the link.                 |
| `target` | Yes      | `string` | Go to this URL when the link is clicked. |

## Running website locally

Make sure you have the latest LTS of NodeJs installed (see [our cheatsheet](https://github.com/qcr/sites-shared/#installing-nodejs-on-ubuntu)).

1. Clone this repository, and enter the new `sites-home-internal` directory:
   ```
   git clone https://github.com/qcr/sites-home-internal; cd sites-home-internal
   ```
2. Install node dependencies locally:
   ```
   npm install
   ```
3. Start the local development server:
   ```
   npm run dev
   ```
4. Navigate to [localhost:3000](http://localhost:3000) in your browser
