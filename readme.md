# File Genie

A command-line tool to organize files in a directory and create an archive of the files.

## Installation

To use this tool, you need Node.js installed on you machine.

1. Clone this repository

```bash
git clone https://github.com/your_username/file-organizer.git
```

2. Install the dependencies

```bash
npm install
```

## Usage

The tool can be run using the following commands:

- `file-genie tree <directory_path>` - Prints the tree structure of the given directory
- `file-genie organise <directory_path>` - Organizes the files in the given directory
- `file-genie archive <src_directory_path> <dest_directory_path>` - Creates an archive of the files in the source directory and saves it in the destination directory
- `file-genie help` - Prints the help message

## Supported File Types

The tool supports the following file types:

- Video: mp4, mkv, mov, avi, wmv, flv, webm
- Images: jpeg, jpg, png, gif, tiff, psd, eps, raw, ai, heif, webp, bmp, svg
- Audio: aif, aiff, au, flac, m4a, m4b, m4p, mp3, ogg, opus, wav, wma
- Archives: zip, 7z, rar, tar, gz, ar, iso, xz
- Documents: docx, doc, pdf, xlxs, xls, odt, ods, odp, odg, odf, txt, ps, tex
- App: exe, dmg, pkg, deb

## Limitations

- The tool only works with directories and files located on the same machine.
- The tool only supports the file types mentioned above
