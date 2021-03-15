# iconit
 A CLI to help you build icon libraries (JSON & Sprites) from SVG files.

## Installation

Install required node packages 

```
npm install -g iconit
```

## Quick Usage

Create a folder named svg and add icons into it.

```
svg/*.svg
```

Run base command

```
iconit --name=my-icons
```

You'll find the icon library created in the dist folder.

## Options

```
iconit [options]
```

| Option | Description |
|--- | -----| 
| `-n, --name <value>` | Icon library name default value is `icons`. |
| `--json` | Only build json library. |
| `--sprite` | Only build sprite library, but can't run unless json file has been built. |

## License

Copyright (c) 2021 Chas Turansky - Released under the [MIT License](LICENSE)