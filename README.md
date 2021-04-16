# iconit

A CLI to help you build icon libraries (JSON & Sprites) from SVG files.

## Installation

Install required node packages

```
npm install -g iconit
```

## Quick Usage

Create a folder named including and add icons into it.

```
svg/*.svg
```

Run base command

```
iconit --name my-icons
```

You'll find the icon library created in the `dist` folder.

## Options

```
iconit [options]
```

| Option                 | Description                                                            | Default Value |
| ---------------------- | ---------------------------------------------------------------------- | ------------- |
| `-n, --name <value>`   | Name for icon libraries.                                               | `icons`       |
| `-i, --input <value>`  | Input directory containing all SVG files.                              | `/svg`        |
| `-o, --output <value>` | Output directory for generated files.                                  | `/dist`       |
| `--json`               | Only build json library.                                               |               |
| `--sprite`             | Only build sprite library, but you need the json file to build sprite. |               |

## License

Copyright (c) 2021 Chas Turansky - Released under the [MIT License](LICENSE)
