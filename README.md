# Pebble Health Backup

A simple Node HTTP server that accepts a POST to backup data from Pebble Health using the [Pebble Health Export](https://github.com/faelys/pebble-health-export) app.

## Install

Clone the repo:

```
git clone https://github.com/asommer70/pebble-health-backup.git
```

Install dependencies:

```
npm install
```

Run the server:

```
npm start
```

## Export Pebble Health Data

Configure the app to connect to your workstation/server's IP address on port 4005.  For example:

```
http://192.168.1.3:4004
```

Exported data will be saved into the **./files** directory.
